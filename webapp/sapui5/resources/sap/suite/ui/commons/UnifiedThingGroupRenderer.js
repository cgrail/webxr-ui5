/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var U={};U.render=function(r,c){var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);if(t){r.writeAttributeEscaped("title",t);}r.addClass("sapSuiteUtg");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUtgHeader");r.writeClasses();r.writeAttribute("id",c.getId()+"-thing-group-header");r.write(">");r.write("<div");r.addClass("sapSuiteUtgTitle");r.writeClasses();r.writeAttribute("id",c.getId()+"-thing-group-title");r.write(">");r.writeEscaped(c.getTitle());r.write("</div>");r.write("<div");r.addClass("sapSuiteUtgDesc");r.writeClasses();r.writeAttribute("id",c.getId()+"-thing-group-desc");r.write(">");r.writeEscaped(c.getDescription());r.write("</div>");r.write("</div>");r.write("<div");r.addClass("sapSuiteUtgContent");r.addClass("sapSuiteUtgContent"+c.getDesign());r.writeClasses();r.writeAttribute("id",c.getId()+"-thing-group-content");r.write(">");r.renderControl(c.getContent());r.write("</div>");r.write("</div>");};return U;},true);
