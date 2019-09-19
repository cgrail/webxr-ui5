/*
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/chart/utils/ChartUtils'],function(C){"use strict";var a={};function t(c,d){var h=d.some(function(D){return D instanceof sap.chart.data.TimeDimension;});if(h){return C.CONFIG.oAdapteredChartTypes[c];}else{return c;}}a.adaptChartType=function(c,d){if(C.CONFIG.oAdapteredChartTypes[c]){return t(c,d);}else{return c;}};return a;});
