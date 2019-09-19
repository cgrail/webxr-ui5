/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Control","sap/gantt/library"],function(C,l){"use strict";var D=C.extend("sap.gantt.simple.DimensionLegend",{metadata:{library:"sap.gantt",properties:{title:{type:"string",group:"Data",defaultValue:null}},aggregations:{columnConfigs:{type:"sap.gantt.simple.LegendColumnConfig",multiple:true,singularName:"columnConfig"},rowConfigs:{type:"sap.gantt.simple.LegendRowConfig",multiple:true,singularName:"rowConfig"}},events:{}}});return D;});
