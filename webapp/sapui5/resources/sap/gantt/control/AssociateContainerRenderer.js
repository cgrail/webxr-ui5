/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var A={};A.render=function(r,c){if(c.getEnableRootDiv()){r.write("<div");r.writeControlData(c);r.addClass("sapGanttChartLayoutBG");r.writeClasses();r.addStyle("width","100%");r.addStyle("height","100%");r.addStyle("overflow","hidden");r.writeStyles();r.write(">");}r.renderControl(sap.ui.getCore().byId(c.getContent()));if(c.getEnableRootDiv()){r.write("</div>");}};return A;},true);
