/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var A=B.extend("sap.viz.ui5.types.Axis_scale",{metadata:{library:"sap.viz",properties:{fixedRange:{type:"boolean",defaultValue:false},minValue:{type:"float",defaultValue:0},maxValue:{type:"float",defaultValue:0},fixedTicks:{type:"object[]",deprecated:true}}}});return A;});
