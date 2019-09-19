/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['./library','sap/ui/core/Element'],function(l,E){"use strict";var A=E.extend("sap.suite.ui.microchart.AreaMicroChartPoint",{metadata:{library:"sap.suite.ui.microchart",properties:{x:{type:"float",group:"Misc",defaultValue:null},y:{type:"float",group:"Misc",defaultValue:null}}}});A.prototype.setX=function(v,s){this._isXValue=this._isNumber(v);return this.setProperty("x",this._isXValue?v:NaN,s);};A.prototype.setY=function(v,s){this._isYValue=this._isNumber(v);return this.setProperty("y",this._isYValue?v:NaN,s);};A.prototype.getXValue=function(){return this._isXValue?this.getX():undefined;};A.prototype.getYValue=function(){return this._isYValue?this.getY():undefined;};A.prototype._isNumber=function(n){return typeof n=='number'&&!isNaN(n)&&isFinite(n);};A.prototype.clone=function(i,L,o){var c=E.prototype.clone.apply(this,arguments);c._isXValue=this._isXValue;c._isYValue=this._isYValue;return c;};return A;});
