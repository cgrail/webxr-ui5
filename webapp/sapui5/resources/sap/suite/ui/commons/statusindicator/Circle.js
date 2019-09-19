/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/suite/ui/commons/statusindicator/Shape","sap/suite/ui/commons/util/HtmlElement","sap/suite/ui/commons/statusindicator/SimpleShape","sap/suite/ui/commons/statusindicator/SimpleShapeRenderer"],function(S,H,a,b){"use strict";var C=a.extend("sap.suite.ui.commons.statusindicator.Circle",{metadata:{library:"sap.suite.ui.commons",properties:{cx:{type:"float",defaultValue:0},cy:{type:"float",defaultValue:0},r:{type:"float",defaultValue:0}}},renderer:b});C.prototype._getSimpleShapeElement=function(c){var o=new H("circle");o.setId(this._buildIdString(c));o.setAttribute("cx",this.getCx());o.setAttribute("cy",this.getCy());o.setAttribute("r",this.getR());o.setAttribute("stroke-width",this.getStrokeWidth());o.setAttribute("stroke",this._getCssStrokeColor());return o;};return C;});
