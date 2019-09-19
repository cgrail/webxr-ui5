/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var S={};S.render=function(r,s){r.write("<span");r.writeControlData(s);r.addClass("sapSuiteUiCommonsSplitButton");r.writeClasses();r.write(">");r.renderControl(s._oDefaultActionButton);r.renderControl(s._oMenuButton);r.write("</span>");};return S;},true);
