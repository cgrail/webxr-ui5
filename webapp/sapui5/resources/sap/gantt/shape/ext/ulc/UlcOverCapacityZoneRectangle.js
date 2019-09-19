/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/ext/ulc/UlcRectangle"],function(U){"use strict";var a=U.extend("sap.gantt.shape.ext.ulc.UlcOverCapacityZoneRectangle",{});a.prototype.getFill=function(d,r){if(this.mShapeConfig.hasShapeProperty("fill")){return this._configFirst("fill",d);}var c,p;if(this.mShapeConfig.hasShapeProperty("backgroundColor")){c=this._configFirst("backgroundColor",d);}if(this.mShapeConfig.hasShapeProperty("pattern")){p=this._configFirst("pattern",d);}var P;if(c&&p){P="pattern_"+p+"_"+(c.indexOf("#")==0?c.substring(1,c.length):c);}if(P&&sap.ui.getCore().byId(P)){return sap.ui.getCore().byId(P).getRefString();}return"#F6F6F6";};a.prototype.getStroke=function(d,r){if(this.mShapeConfig.hasShapeProperty("stroke")){return this._configFirst("stroke",d);}return"#CAC7BA";};a.prototype.getStrokeWidth=function(d,r){if(this.mShapeConfig.hasShapeProperty("strokeWidth")){return this._configFirst("strokeWidth",d);}return 0;};return a;},true);
