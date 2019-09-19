/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["./SortableUI","sap/m/Text","sap/m/Select","sap/ui/core/Item","sap/m/CustomListItem"],function(S,T,a,I,C){"use strict";var b=S.extend("sap.ui.mdc.p13n.SortUI",{library:"sap.ui.mdc",metadata:{},init:function(){S.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");this.setTitle(r.getText("sortui.SORT_FIELDS"));this.addStyleClass("sapUiMDCSortUI");this.setTemplate(new C({selected:"{selected}",content:[new T({width:"50%",text:"{label}"}).addStyleClass("sapUiSmallMarginBegin"),new a({selectedKey:"{sortOrder}",items:[new I({key:"",text:r.getText("sortui.SORT_NONE")}),new I({key:"ascending",text:r.getText("sortui.SORT_ASCENDING")}),new I({key:"descending",text:r.getText("sortui.SORT_DESCENDING")})]})]}).addStyleClass("sapMSLI"));},renderer:{}});b.prototype.getSortedFields=function(){return this._oModel.getData().slice().filter(function(f){return f.sortOrder!=="";});};return b;},true);
