/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Control","sap/suite/ui/commons/statusindicator/util/ThemingUtil"],function(C,T){"use strict";var P=C.extend("sap.suite.ui.commons.statusindicator.PropertyThreshold",{metadata:{library:"sap.suite.ui.commons",properties:{fillColor:{type:"sap.m.ValueCSSColor",defaultValue:"Neutral"},toValue:{type:"int",defaultValue:0},ariaLabel:{type:"string",defaultValue:null}}}});P.prototype._getCssFillColor=function(){if(!this._cssFillColor){this._cssFillColor=T.resolveColor(this.getFillColor());}return this._cssFillColor;};return P;});
