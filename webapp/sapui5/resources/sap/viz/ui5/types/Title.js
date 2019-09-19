/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var T=B.extend("sap.viz.ui5.types.Title",{metadata:{library:"sap.viz",properties:{visible:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:null},alignment:{type:"sap.viz.ui5.types.Title_alignment",defaultValue:sap.viz.ui5.types.Title_alignment.center}},aggregations:{layout:{type:"sap.viz.ui5.types.Title_layout",multiple:false,deprecated:true}}}});return T;});
