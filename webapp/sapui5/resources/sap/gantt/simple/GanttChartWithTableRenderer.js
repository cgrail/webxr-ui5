/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/library"],function(l){"use strict";var G={};G.render=function(r,c){this.renderSplitter(r,c);};G.renderSplitter=function(r,c){r.write("<div");r.writeControlData(c);r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapGanttChartWithSingleTable");if(c.getDisplayType()===l.simple.GanttChartWithTableDisplayType.Chart){r.addClass("sapGanttChartWithTableShowOnlyChart");}r.writeClasses();r.write(">");var s=c.getAggregation("_splitter");s.getContentAreas()[0].getLayoutData().setSize(c.getSelectionPanelSize());r.renderControl(s);r.write("</div>");};return G;},true);
