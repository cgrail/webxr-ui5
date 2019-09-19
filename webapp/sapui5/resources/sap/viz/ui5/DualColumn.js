/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','./core/BaseChart'],function(l,B){"use strict";var D=B.extend("sap.viz.ui5.DualColumn",{metadata:{library:"sap.viz",aggregations:{general:{type:"sap.viz.ui5.types.RootContainer",multiple:false},interaction:{type:"sap.viz.ui5.types.controller.Interaction",multiple:false},title:{type:"sap.viz.ui5.types.Title",multiple:false},legendGroup:{type:"sap.viz.ui5.types.Legend",multiple:false},legend:{type:"sap.viz.ui5.types.legend.Common",multiple:false},toolTip:{type:"sap.viz.ui5.types.Tooltip",multiple:false},xyContainer:{type:"sap.viz.ui5.types.XYContainer",multiple:false},dataLabel:{type:"sap.viz.ui5.types.Datalabel",multiple:false},yAxis:{type:"sap.viz.ui5.types.Axis",multiple:false},xAxis:{type:"sap.viz.ui5.types.Axis",multiple:false},background:{type:"sap.viz.ui5.types.Background",multiple:false},plotArea:{type:"sap.viz.ui5.types.VerticalBar",multiple:false},yAxis2:{type:"sap.viz.ui5.types.Axis",multiple:false}},events:{selectData:{},deselectData:{},showTooltip:{deprecated:true},hideTooltip:{deprecated:true},initialized:{}},vizChartType:"viz/dual_column"}});return D;});
