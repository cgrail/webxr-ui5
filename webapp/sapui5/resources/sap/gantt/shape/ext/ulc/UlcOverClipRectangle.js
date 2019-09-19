/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/ext/ulc/UlcRectangle"],function(U){"use strict";var a=U.extend("sap.gantt.shape.ext.ulc.UlcOverClipRectangle",{});a.prototype.getFill=function(d,r){if(this.mShapeConfig.hasShapeProperty("fill")){return this._configFirst("fill",d);}return"#FF0000";};a.prototype.getClipPath=function(d,r){if(this.mShapeConfig.hasShapeProperty("clipPath")){return this._configFirst("clipPath",d);}var u=r.uid;var p=new RegExp("\\[|\\]|:|\\|","g");var n=u.replace(p,"_");return"url(#"+n+"_"+d.id+"_"+d.dimension+")";};return a;},true);
