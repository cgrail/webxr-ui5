/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var L=B.extend("sap.viz.ui5.types.Line_marker",{metadata:{library:"sap.viz",properties:{visible:{type:"boolean",defaultValue:true},shape:{type:"sap.viz.ui5.types.Line_marker_shape",defaultValue:sap.viz.ui5.types.Line_marker_shape.circle},size:{type:"int",defaultValue:6},number:{type:"int",deprecated:true}}}});return L;});
