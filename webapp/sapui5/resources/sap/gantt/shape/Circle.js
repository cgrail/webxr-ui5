/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape"],function(S){"use strict";var C=S.extend("sap.gantt.shape.Circle",{metadata:{properties:{tag:{type:"string",defaultValue:"circle"},cx:{type:"float"},cy:{type:"float"},r:{type:"float",defaultValue:5}}}});C.prototype.init=function(){S.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_CIRCLE"));};C.prototype.getCx=function(d,r){if(this.mShapeConfig.hasShapeProperty("cx")){return this._configFirst("cx",d);}return this.getRotationCenter(d,r)[0];};C.prototype.getCy=function(d,r){if(this.mShapeConfig.hasShapeProperty("cy")){return this._configFirst("cy",d);}return this.getRowYCenter(d,r);};C.prototype.getR=function(d){return this._configFirst("r",d,true);};C.prototype.getStyle=function(d,r){var i=S.prototype.getStyle.apply(this,arguments);var s={"fill":this.determineValueColor(this.getFill(d,r)),"fill-opacity":this.getFillOpacity(d,r)};return i+this.getInlineStyle(s);};return C;},true);
