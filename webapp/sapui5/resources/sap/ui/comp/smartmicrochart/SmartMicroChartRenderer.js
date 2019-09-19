/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var S={};S.render=function(r,c){if(c._bIsInitialized){r.write("<div");r.writeControlData(c);if(c.getIsResponsive()){r.addClass("sapSuiteUiSmartMicroChartResponsive");}r.writeClasses();r.write(">");r.renderControl(c.getAggregation("_chart"));r.write("</div>");}};return S;},true);
