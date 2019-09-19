/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var T={};T.render=function(r,t){t.getAggregation("_toolbar").addStyleClass("sapUiRTECustomToolbar");r.renderControl(t.getAggregation("_toolbar"));};return T;},true);
