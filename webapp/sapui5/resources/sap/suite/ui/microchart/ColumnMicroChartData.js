/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['./library','sap/ui/core/Element'],function(l,E){"use strict";var C=E.extend("sap.suite.ui.microchart.ColumnMicroChartData",{metadata:{library:"sap.suite.ui.microchart",properties:{color:{group:"Misc",type:"sap.m.ValueCSSColor",defaultValue:"Neutral"},label:{type:"string",group:"Misc",defaultValue:""},displayValue:{type:"string",group:"Appearance"},value:{type:"float",group:"Misc"}},events:{press:{}}}});C.prototype.init=function(){this.setAggregation("tooltip","((AltText))",true);};C.prototype.attachEvent=function(e,d,f,L){E.prototype.attachEvent.call(this,e,d,f,L);if(this.getParent()&&e==="press"){this.getParent().setBarPressable(this,true);}return this;};C.prototype.detachEvent=function(e,f,L){E.prototype.detachEvent.call(this,e,f,L);if(this.getParent()&&e==="press"){this.getParent().setBarPressable(this,false);}return this;};return C;});
