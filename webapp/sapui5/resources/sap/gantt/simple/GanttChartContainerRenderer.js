/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var G={};G.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapGanttContainer");r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");this.renderSvgDefs(r,c);this.renderToolbar(r,c);this.renderGanttCharts(r,c);r.write("</div>");};G.renderSvgDefs=function(r,c){var s=c.getSvgDefs();if(s){r.write("<svg id='"+c.getId()+"-svg-psdef' tabindex='-1' focusable='false'");r.addClass("sapGanttInvisiblePaintServer");r.writeClasses();r.write(">");r.write(s.getDefString());r.write("</svg>");}};G.renderToolbar=function(r,c){var t=c.getToolbar();if(t){r.write("<div");r.addClass("sapGanttContainerTbl");r.writeClasses();r.write(">");r.renderControl(t);r.write("</div>");}};G.renderGanttCharts=function(r,c){r.write("<div");r.addClass("sapGanttContainerCnt");r.writeClasses();r.write(">");r.renderControl(c._oSplitter);r.write("</div>");};return G;},true);
