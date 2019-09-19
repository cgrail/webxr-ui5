/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/rta/appVariant/manageApps/webapp/model/models",
	"sap/ui/rta/appVariant/Utils",
	"sap/m/MessageBox",
	"sap/ui/rta/Utils",
	"sap/ui/rta/appVariant/Feature",
	"sap/ui/rta/RuntimeAuthoring",
	"sap/ui/core/BusyIndicator",
	"sap/ui/rta/appVariant/AppVariantUtils",
	"sap/base/i18n/ResourceBundle"
], function(
	Controller,
	Model,
	AppVariantOverviewUtils,
	MessageBox,
	RtaUtils,
	RtaAppVariantFeature,
	RuntimeAuthoring,
	BusyIndicator,
	AppVariantUtils,
	ResourceBundle
) {
	"use strict";

	var _sIdRunningApp, _bKeyUser, sModulePath, oI18n;
	return Controller.extend("sap.ui.rta.appVariant.manageApps.webapp.controller.ManageApps", {
		onInit: function() {
			_sIdRunningApp = this.getOwnerComponent().getIdRunningApp();
			_bKeyUser = this.getOwnerComponent().getIsOverviewForKeyUser();

			if (!oI18n) {
				this._createResourceBundle();
			}

			BusyIndicator.show();
			return AppVariantOverviewUtils.getAppVariantOverview(_sIdRunningApp, _bKeyUser).then(function(aAppVariantOverviewAttributes) {
				BusyIndicator.hide();
				if (aAppVariantOverviewAttributes.length) {
					return this._arrangeOverviewDataAndBindToModel(aAppVariantOverviewAttributes).then(function(aAppVariantOverviewAttributes) {
						return this._highlightNewCreatedAppVariant(aAppVariantOverviewAttributes);
					}.bind(this));
				} else {
					AppVariantUtils.publishEventBus();
					return this._showMessageWhenNoAppVariantsExist();
				}
			}.bind(this))["catch"](function(oError) {
				AppVariantUtils.publishEventBus();
				var oErrorInfo = AppVariantUtils.buildErrorInfo("MSG_MANAGE_APPS_FAILED", oError);
				oErrorInfo.overviewDialog = true;
				BusyIndicator.hide();
				return AppVariantUtils.showRelevantDialog(oErrorInfo, false);
			});
		},
		_createResourceBundle: function() {
			sModulePath = sap.ui.require.toUrl("sap/ui/rta/appVariant/manageApps/") + "webapp";
			oI18n = ResourceBundle.create({
				url : sModulePath + "/i18n/i18n.properties"
			});
		},
		_showMessageWhenNoAppVariantsExist: function() {
			return RtaUtils._showMessageBox(
				MessageBox.Icon.INFORMATION,
				"TITLE_APP_VARIANT_OVERVIEW_SAP_DEVELOPER",
				"MSG_APP_VARIANT_OVERVIEW_SAP_DEVELOPER");
		},
		_highlightNewCreatedAppVariant: function(aAppVariantOverviewAttributes) {
			var oTable = this.byId("Table1");

			aAppVariantOverviewAttributes.forEach(function(oAppVariantDescriptor, index) {
				if (oAppVariantDescriptor.currentStatus) {
					if (oTable.getItems().length >= index) {
						oTable.getItems()[index].focus();
					}
				}
			});

			return Promise.resolve();
		},
		_arrangeOverviewDataAndBindToModel: function(aAppVariantOverviewAttributes) {
			var aAdaptingAppAttributes = aAppVariantOverviewAttributes.filter(function(oAppVariantProperty){
				return oAppVariantProperty.appId === _sIdRunningApp;
			});

			var oAdaptingAppAttributes = aAdaptingAppAttributes[0];
			if (oAdaptingAppAttributes) {
				oAdaptingAppAttributes.currentStatus = oI18n.getText("MAA_CURRENTLY_ADAPTING");
			}

			aAppVariantOverviewAttributes = aAppVariantOverviewAttributes.filter(function(oAppVariantProperty) {
				return oAppVariantProperty.appId !== _sIdRunningApp;
			});

			aAppVariantOverviewAttributes.unshift(oAdaptingAppAttributes);

			var aReferenceAppAttributes = aAppVariantOverviewAttributes.filter(function(oAppVariantProperty){
				return oAppVariantProperty.isOriginal;
			});

			var oReferenceAppAttributes = aReferenceAppAttributes[0];

			aAppVariantOverviewAttributes = aAppVariantOverviewAttributes.filter(function(oAppVariantProperty) {
				return !oAppVariantProperty.isOriginal;
			});

			aAppVariantOverviewAttributes.unshift(oReferenceAppAttributes);

			// Bind the app variant overview to JSON model

			var oModelData = {
				appVariants: aAppVariantOverviewAttributes
			};

			var oModel = Model.createModel(oModelData);
			this.getView().setModel(oModel);

			return Promise.resolve(aAppVariantOverviewAttributes);
		},
		formatRowHighlight: function(sValue) {
			// Your logic for rowHighlight goes here
			if (sValue === oI18n.getText("MAA_CURRENTLY_ADAPTING")) {
				return "Success";
			} else if (sValue === oI18n.getText("MAA_NEW_APP_VARIANT")) {
				return "Information";
			}

			return "None";
		},
		formatDelButtonTooltip: function(bDelAppVarButtonEnabled, bIsS4HanaCloud) {
			if (!bDelAppVarButtonEnabled && !bIsS4HanaCloud) {
				return oI18n.getText("TOOLTIP_DELETE_APP_VAR");
			}
			return undefined;
		},
		getModelProperty : function(sModelPropName, sBindingContext) {
			return this.getView().getModel().getProperty(sModelPropName, sBindingContext);
		},
		onMenuAction: function(oEvent) {
			var oItem = oEvent.getParameter("item"),
				sItemPath = "";

			while (oItem instanceof sap.m.MenuItem) {
				sItemPath = oItem.getText() + " > " + sItemPath;
				oItem = oItem.getParent();
			}

			sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

			if (!oI18n) {
				this._createResourceBundle();
			}

			if (sItemPath === oI18n.getText("MAA_DIALOG_ADAPT_UI")) {
				return this.handleUiAdaptation(oEvent);
			} else if (sItemPath === oI18n.getText("MAA_DIALOG_COPY_ID")) {
				return this.copyId(oEvent);
			} else if (sItemPath === oI18n.getText("MAA_DIALOG_DELETE_APPVAR")) {
				return this.deleteAppVariant(oEvent);
			} else if (sItemPath === oI18n.getText("MAA_DIALOG_SAVE_AS_APP")) {
				return this.saveAsAppVariant(oEvent);
			}

			return undefined;
		},
		handleUiAdaptation: function(oEvent) {
			var oNavigationService = sap.ushell.Container.getService( "CrossApplicationNavigation" );

			var sSemanticObject = this.getModelProperty("semanticObject", oEvent.getSource().getBindingContext());
			var sAction = this.getModelProperty("action", oEvent.getSource().getBindingContext());
			var oParams = this.getModelProperty("params", oEvent.getSource().getBindingContext());

			var oNavigationParams;
			if (sSemanticObject && sAction && oParams) {
				oNavigationParams = {
					target: {
						semanticObject : sSemanticObject,
						action : sAction
					},
					params: oParams
				};

				RuntimeAuthoring.enableRestart( "CUSTOMER" );

				oNavigationService.toExternal(oNavigationParams);

				AppVariantUtils.publishEventBus();
				return true;
			} else {
				return false;
			}
		},
		saveAsAppVariant: function(oEvent) {
			AppVariantUtils.publishEventBus();

			var sDescriptorUrl = this.getModelProperty("descriptorUrl", oEvent.getSource().getBindingContext());

			BusyIndicator.show();
			return AppVariantOverviewUtils.getDescriptor(sDescriptorUrl).then(function(oAppVariantDescriptor) {
				BusyIndicator.hide();
				return RtaAppVariantFeature.onSaveAsFromOverviewDialog(oAppVariantDescriptor, false);
			});
		},
		copyId: function(oEvent) {
			var sCopiedId = this.getModelProperty("appId", oEvent.getSource().getBindingContext());
			AppVariantUtils.copyId(sCopiedId);
		},
		deleteAppVariant: function(oEvent) {
			var oInfo = {};
			var sMessage = oI18n.getText("MSG_APP_VARIANT_DELETE_CONFIRMATION");
			oInfo.text = sMessage;
			oInfo.deleteAppVariant = true;

			var sAppVarId = this.getModelProperty("appId", oEvent.getSource().getBindingContext());
			var bIsRunningAppVariant = this.getModelProperty("isAppVariant", oEvent.getSource().getBindingContext());
			var sCurrentStatus = this.getModelProperty("currentStatus", oEvent.getSource().getBindingContext());

			return AppVariantUtils.showRelevantDialog(oInfo).then(function() {

				if (!oI18n) {
					this._createResourceBundle();
				}

				return AppVariantUtils.triggerDeleteAppVariantFromLREP(sAppVarId).then(function() {
					if (bIsRunningAppVariant && sCurrentStatus === oI18n.getText("MAA_CURRENTLY_ADAPTING")) {
						AppVariantUtils.publishEventBus();
						AppVariantUtils.navigateToFLPHomepage();
					} else {
						AppVariantUtils.publishEventBus();
						return RtaAppVariantFeature.onGetOverview(true);
					}
				}).catch(function() {
					return true;
				});
			}.bind(this)).catch(function() {
				return;
			});
		}
	});
});