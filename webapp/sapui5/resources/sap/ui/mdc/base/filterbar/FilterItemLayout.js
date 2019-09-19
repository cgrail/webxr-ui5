/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/layout/VerticalLayout','sap/ui/layout/VerticalLayoutRenderer','sap/m/Label'],function(V,a,L){"use strict";var F=V.extend("sap.ui.mdc.base.filterbar.FilterItemLayout",{renderer:a.render});F.prototype._setLabel=function(f){this._oLabel=new L(f.getId()+"-label");if(f.getFieldPath()==="$search"){this._oLabel.setText("\u2008");}else{this._oLabel.addStyleClass("sapUiMdcBaseFilterBarLabel");}f.connectLabel(this._oLabel);};F.prototype._getFilterField=function(){return this._oFilterField;};F.prototype.setFilterField=function(f){this._setLabel(f);this._oFilterField=f;};F.prototype.getContent=function(){var c=[];c.push(this._oLabel);c.push(this._oFilterField);return c;};F.prototype.exit=function(){this._oFilterField=null;if(this._oLabel&&!this._oLabel.bIsDestroy){this._oLabel.destroy();this._oLabel=undefined;}};return F;},true);
