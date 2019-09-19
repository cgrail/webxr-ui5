/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var U={};U.render=function(r,c){var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);if(t){r.writeAttributeEscaped("title",t);}r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapSuiteUti");r.writeClasses();r.write(">");r.renderControl(c._oNavContainer);r.write("</div>");};return U;},true);
