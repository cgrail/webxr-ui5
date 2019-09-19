/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(["./library","sap/ui/core/Element","sap/m/ValueCSSColor"],function(l,E,V){"use strict";var H=E.extend("sap.suite.ui.microchart.HarveyBallMicroChartItem",{metadata:{library:"sap.suite.ui.microchart",properties:{color:{group:"Misc",type:"sap.m.ValueCSSColor",defaultValue:"Neutral"},fraction:{group:"Misc",type:"float",defaultValue:0},fractionLabel:{group:"Misc",type:"string"},fractionScale:{group:"Misc",type:"string"},formattedLabel:{group:"Misc",type:"boolean",defaultValue:false}}}});H.prototype.init=function(){this.setAggregation("tooltip","((AltText))",true);};return H;});
