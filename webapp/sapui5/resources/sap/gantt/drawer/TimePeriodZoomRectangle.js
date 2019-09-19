/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/drawer/Drawer","sap/ui/thirdparty/d3"],function(D){"use strict";var T=D.extend("sap.gantt.drawer.TimePeriodZoomRectangle");T.prototype.drawSvg=function(s,x){s.selectAll(".sapGanttChartTimePeriodZoomRectangle").remove();s.append("rect").classed("sapGanttChartTimePeriodZoomRectangle",true).attr("x",function(){return x;}).attr("y",function(){return 0;}).attr("height",function(){return jQuery(s.node()).height();});};T.prototype.updateSvg=function(s,S,e){s.selectAll(".sapGanttChartTimePeriodZoomRectangle").attr("x",function(){return S;}).attr("width",function(){return e-S;});};T.prototype.destroySvg=function(s){s.selectAll(".sapGanttChartTimePeriodZoomRectangle").remove();};return T;},true);
