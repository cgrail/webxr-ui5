/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['./library','sap/ui/core/Element','sap/ui/core/Control'],function(l,E,C){"use strict";var B=E.extend("sap.suite.ui.microchart.BulletMicroChartData",{metadata:{library:"sap.suite.ui.microchart",properties:{value:{type:"float",group:"Misc",defaultValue:"0"},color:{type:"sap.m.ValueColor",group:"Misc",defaultValue:"Neutral"}}}});B.prototype.init=function(){this.setAggregation("tooltip","((AltText))",true);};B.prototype.setValue=function(v){this._isValueSet=this._fnIsNumber(v);return this.setProperty("value",this._isValueSet?v:NaN);};B.prototype._fnIsNumber=function(n){return typeof n=='number'&&!isNaN(n)&&isFinite(n);};B.prototype.clone=function(i,L,o){var c=C.prototype.clone.apply(this,arguments);c._isValueSet=this._isValueSet;return c;};return B;});
