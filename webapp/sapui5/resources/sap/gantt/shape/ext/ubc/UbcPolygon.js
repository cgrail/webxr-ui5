/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Polygon"],function(P){"use strict";var U=P.extend("sap.gantt.shape.ext.ubc.UbcPolygon",{metadata:{"abstract":true}});U.prototype.getEnableSelection=function(d,r){if(this.mShapeConfig.hasShapeProperty("enableSelection")){return this._configFirst("enableSelection",d);}return false;};U.prototype._getMaxY=function(d,r){var t=r.y;var a=r.rowHeight-1;var m=t+a;return m;};U.prototype._getMaxTotal=function(d){var m=Math.max.apply(Math,d.period.map(function(o){return o.supply;}));if(m<=0){m=1;}return m;};U.prototype._getmaxExceedCap=function(d,t){var m;if(t){m=t;}else{m=this._getMaxTotal(d);}var a=25;if(this.mShapeConfig.hasShapeProperty("maxExceedCapacity")){a=this._configFirst("maxExceedCapacity",d);}return m*a/100;};U.prototype._getMaxTotalRevised=function(d){var m=this._getMaxTotal(d);var a=this._getmaxExceedCap(d,m)+m;return a;};return U;},true);
