/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/suite/ui/commons/util/HtmlElement","sap/suite/ui/commons/statusindicator/SimpleShape","sap/suite/ui/commons/statusindicator/SimpleShapeRenderer"],function(H,S,a){"use strict";var P=S.extend("sap.suite.ui.commons.statusindicator.Path",{metadata:{library:"sap.suite.ui.commons",properties:{d:{type:"string",defaultValue:null}}},renderer:a});P.prototype._getSimpleShapeElement=function(p){var o=new H("path");o.setId(this._buildIdString(p));o.setAttribute("d",this.getD(),true);o.setAttribute("stroke-width",this.getStrokeWidth());o.setAttribute("stroke",this._getCssStrokeColor());if(this.aCustomStyleClasses){this.aCustomStyleClasses.forEach(o.addClass.bind(o));}return o;};return P;});
