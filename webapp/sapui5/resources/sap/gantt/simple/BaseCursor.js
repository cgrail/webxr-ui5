/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./BaseRectangle","./BasePath","./RenderUtils"],function(B,a,R){"use strict";var b=B.extend("sap.gantt.simple.BaseCursor",{metadata:{properties:{length:{type:"float",defaultValue:10},width:{type:"float",defaultValue:5},pointHeight:{type:"float",defaultValue:5}}}});b.prototype.getD=function(){var d;var n=this.getPointHeight();var c=this.getWidth();var e=this.getLength();var f=e/2;var C=this._getCenter();if(this._isPropertiesValid(n,c,e,f)){d=["M ",C.join(" ")," m ",-f," ",-(c+n)/2," l ",e," 0 l 0 ",c," l -",f," ",n," l -",f," -",n," z"].join("");}if(R.isValidD(d)){return d;}else{jQuery.sap.log.warning("Cursor shape generated invalid d: "+d);return null;}};b.prototype._getCenter=function(){var n=B.prototype.getX.apply(this,arguments);var c=this.getRowYCenter();return[n,c];};b.prototype._isPropertiesValid=function(n,c,d,e){return jQuery.isNumeric(n)&&jQuery.isNumeric(c)&&jQuery.isNumeric(d)&&jQuery.isNumeric(e);};b.prototype.renderElement=function(){if(this._isValid()){a.prototype.renderElement.apply(this,arguments);}};return b;},true);
