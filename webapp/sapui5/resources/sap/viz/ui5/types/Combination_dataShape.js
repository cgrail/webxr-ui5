/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var C=B.extend("sap.viz.ui5.types.Combination_dataShape",{metadata:{library:"sap.viz",properties:{primaryAxis:{type:"string[]",defaultValue:['bar','line','line']},secondaryAxis:{type:"string[]",defaultValue:['line','line','line']},secondAxis:{type:"string[]",defaultValue:['line','line','line'],deprecated:true}}}});return C;});
