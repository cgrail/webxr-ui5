/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var A=B.extend("sap.viz.ui5.types.Axis_label",{metadata:{library:"sap.viz",properties:{visible:{type:"boolean",defaultValue:true},numberFormat:{type:"string",defaultValue:'',deprecated:true},formatString:{type:"any",defaultValue:null},unitFormatType:{type:"sap.viz.ui5.types.Axis_label_unitFormatType",defaultValue:sap.viz.ui5.types.Axis_label_unitFormatType.FinancialUnits},hideSubLevels:{type:"boolean",defaultValue:false}}}});return A;});
