/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var U=E.extend("sap.gantt.simple.UtilizationDimension",{metadata:{properties:{name:{type:"string"},dimensionColor:{type:"sap.gantt.ValueSVGPaintServer"}},defaultAggregation:"periods",aggregations:{periods:{type:"sap.gantt.simple.UtilizationPeriod"}}}});return U;},true);
