/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/simple/BaseRectangle"],function(B){"use strict";var a=B.extend("sap.gantt.simple.BaseCalendar",{metadata:{properties:{calendarName:{type:"string"}}}});a.prototype.applySettings=function(s,S){s=s||{};s.height=s.height||"inherit";B.prototype.applySettings.call(this,s,S);};a.prototype.getX=function(){return 0;};a.prototype.getSelectable=function(){return false;};a.prototype.getWidth=function(){return this.getGanttChartBase().iGanttRenderedWidth;};a.prototype.getFill=function(){var c=this.getCalendarName();var p=this.getGanttChartBase().getCalendarDef();if(p){return p.getRefString(c);}else{return this.getProperty("fill");}};a.prototype.isVisible=function(){return true;};return a;},true);
