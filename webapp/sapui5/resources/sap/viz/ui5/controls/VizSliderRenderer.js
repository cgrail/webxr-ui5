/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var R={};R.render=function(r,c){r.write("<DIV");r.writeControlData(c);r.addClass("sapRangeSliderVizFrame");r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.addStyle("position","relative");r.writeStyles();r.write(">");r.renderControl(c.getAggregation("_vizFrame"));r.renderControl(c.getAggregation("_rangeSlider"));r.write("</DIV>");};return R;},true);
