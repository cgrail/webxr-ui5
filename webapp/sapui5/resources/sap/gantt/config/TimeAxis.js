/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var T=E.extend("sap.gantt.config.TimeAxis",{metadata:{library:"sap.gantt",properties:{planHorizon:{type:"object",defaultValue:sap.gantt.config.DEFAULT_PLAN_HORIZON},initHorizon:{type:"object",defaultValue:sap.gantt.config.DEFAULT_INIT_HORIZON},zoomStrategy:{type:"object",defaultValue:sap.gantt.config.DEFAULT_TIME_ZOOM_STRATEGY},granularity:{type:"string",defaultValue:"4day"},finestGranularity:{type:"string",defaultValue:"5min"},coarsestGranularity:{type:"string",defaultValue:"1month"},rate:{type:"float",defaultValue:1}}}});return T;},true);
