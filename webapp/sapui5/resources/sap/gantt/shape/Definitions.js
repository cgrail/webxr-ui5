/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape"],function(S){"use strict";var D=S.extend("sap.gantt.shape.Definitions",{metadata:{properties:{tag:{type:"string",defaultValue:"defs"},childTagName:{type:"string"},content:{type:"string",defaultValue:""},referenceId:{type:"string"}}}});D.prototype.getChildTagName=function(d,r){if(this.mShapeConfig.hasShapeProperty("childTagName")){return this._configFirst("childTagName",d);}};D.prototype.getContent=function(d,r){if(this.mShapeConfig.hasShapeProperty("content")){return this._configFirst("content",d);}return null;};D.prototype.getReferenceId=function(d,r){return this.getParentReferenceId(d,r);};return D;},true);
