/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var D=B.extend("sap.viz.ui5.types.Datatransform_dataSampling",{metadata:{library:"sap.viz",properties:{enable:{type:"boolean",defaultValue:false},sizeFactor:{type:"int",defaultValue:1},numberPrecondition:{type:"int",defaultValue:3000}},aggregations:{grid:{type:"sap.viz.ui5.types.Datatransform_dataSampling_grid",multiple:false}}}});return D;});
