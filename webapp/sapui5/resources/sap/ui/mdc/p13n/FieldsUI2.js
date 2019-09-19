/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["./SortableUI","sap/m/Text","sap/m/StandardListItem"],function(S,T,a){"use strict";var F=S.extend("sap.ui.mdc.p13n.SortUI",{library:"sap.ui.mdc",metadata:{},init:function(){S.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");this.setTitle(r.getText("fieldsui.SELECTED_FIELDS"));this.addStyleClass("sapUiMDCFieldsUI");this.setMultiSelection(true);this.setTemplate(new a({title:"{label}",selected:"{selected}"}));},renderer:{}});F.prototype.getSelectedFields=function(){var f=this._oModel.getData().slice();return f.filter(function(o){return o.selected;});};return F;},false);
