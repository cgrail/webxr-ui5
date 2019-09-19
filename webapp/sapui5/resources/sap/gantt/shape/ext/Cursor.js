/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Path"],function(P){"use strict";var C=P.extend("sap.gantt.shape.ext.Cursor",{metadata:{properties:{isClosed:{type:"boolean",defaultValue:true},length:{type:"float",defaultValue:10},width:{type:"float",defaultValue:5},pointHeight:{type:"float",defaultValue:5}}}});C.prototype.init=function(){var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_CURSOR"));};C.prototype.getD=function(d,r){var D;if(this.mShapeConfig.hasShapeProperty("d")){D=this._configFirst("d",d);}else{var n=this.getPointHeight(d,r);var a=this.getWidth(d,r);var b=this.getLength(d,r);var c=b/2;var e=this.getRotationCenter(d,r);if(e&&e.length===2&&jQuery.isNumeric(n)&&jQuery.isNumeric(a)&&jQuery.isNumeric(b)&&jQuery.isNumeric(c)){D="M "+e.join(" ")+" m "+-c+" "+-(a+n)/2+" l "+b+" 0 l 0 "+a+" l -"+c+" "+n+" l -"+c+" -"+n+" z";}}if(this.isValid(D)){return D;}else{jQuery.sap.log.warning("Cursor shape generated invalid d: "+D+" from the given data: "+d);return null;}};C.prototype.getLength=function(d){return this._configFirst("length",d,true);};C.prototype.getWidth=function(d){return this._configFirst("width",d,true);};C.prototype.getPointHeight=function(d){return this._configFirst("pointHeight",d,true);};return C;},true);
