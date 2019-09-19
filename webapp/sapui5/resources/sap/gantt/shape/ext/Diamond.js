/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Path"],function(P){"use strict";var D=P.extend("sap.gantt.shape.ext.Diamond",{metadata:{properties:{isClosed:{type:"boolean",defaultValue:true},verticalDiagonal:{type:"float",defaultValue:12},horizontalDiagonal:{type:"float",defaultValue:12}}}});D.prototype.init=function(){var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_DIAMOND"));};D.prototype.getD=function(d,r){var s;if(this.mShapeConfig.hasShapeProperty("d")){s=this._configFirst("d",d);}else{var h=this.getVerticalDiagonal(d,r)/2;var a=this.getHorizontalDiagonal(d,r)/2;var c=this.getRotationCenter(d,r);if(c&&c.length===2&&jQuery.isNumeric(h)&&jQuery.isNumeric(a)){s="M "+c.join(" ")+" m "+-a+" 0"+" l "+a+" -"+h+" l "+a+" "+h+" l -"+a+" "+h+" z";}}if(this.isValid(s)){return s;}else{jQuery.sap.log.warning("Diamond shape generated invalid d: "+s+" from the given data: "+d);return null;}};D.prototype.getVerticalDiagonal=function(d){return this._configFirst("verticalDiagonal",d,true);};D.prototype.getHorizontalDiagonal=function(d){return this._configFirst("horizontalDiagonal",d,true);};return D;},true);
