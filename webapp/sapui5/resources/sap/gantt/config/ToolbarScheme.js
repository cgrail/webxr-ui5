/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var T=E.extend("sap.gantt.config.ToolbarScheme",{metadata:{properties:{key:{type:"string",defaultValue:null},sourceSelect:{type:"object",defaultValue:null},birdEye:{type:"object",defaultValue:null},layout:{type:"object",defaultValue:null},customToolbarItems:{type:"object",defaultValue:null},expandChart:{type:"object",defaultValue:null},expandTree:{type:"object",defaultValue:null},timeZoom:{type:"object",defaultValue:null},legend:{type:"object",defaultValue:null},settings:{type:"object",defaultValue:null},mode:{type:"object",defaultValue:null},toolbarDesign:{type:"string",defaultValue:sap.m.ToolbarDesign.Auto}}}});T.prototype.setTimeZoom=function(t){var o=t;if(!(o instanceof sap.gantt.config.TimeZoomGroup)){o=new sap.gantt.config.TimeZoomGroup();o.setOverflowPriority(t.getOverflowPriority());o.setPosition(t.getPosition());}this.setProperty("timeZoom",o);return this;};return T;},true);
