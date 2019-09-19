/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var L={};L.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapGanttChartLegend");r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height","100%");r.writeStyles();r.write(">");r.renderControl(c._oNavContainer);r.write("</div>");};return L;},true);
