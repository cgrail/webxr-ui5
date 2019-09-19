/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element',"sap/m/OverflowToolbarPriority"],function(E,O){"use strict";var T=E.extend("sap.gantt.config.ToolbarGroup",{metadata:{properties:{position:{type:"string",defaultValue:null},overflowPriority:{type:"sap.m.OverflowToolbarPriority",defaultValue:O.Low},buttonType:{type:"sap.m.ButtonType",group:"Appearance",defaultValue:sap.m.ButtonType.Default}}}});return T;},true);
