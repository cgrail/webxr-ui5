/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var T={};T.render=function(r,t){var n=t.getAllToolbarItems().length;r.write("<div");r.writeControlData(t);r.addClass("sapGanttToolbar");if(n==0){r.addClass("sapGanttSkipToolbar");}r.writeClasses();r.write(">");r.renderControl(t.getAggregation("_toolbar"));r.write("</div>");};return T;},true);
