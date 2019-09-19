/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/ClipPath"],function(C){"use strict";var U=C.extend("sap.gantt.shape.ext.ulc.UlcClipPath",{});U.prototype.getHtmlClass=function(d,r){if(this.mShapeConfig.hasShapeProperty("htmlClass")){return this._configFirst("htmlClass",d);}var u=r.uid;var p=new RegExp("\\[|\\]|:|\\|","g");var n=u.replace(p,"_");return n+"_"+d.id+"_"+d.dimension;};return U;},true);
