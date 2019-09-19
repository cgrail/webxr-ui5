/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var D={};D.render=function(r,d){if(!d.getVisible()){return;}r.write("<span");r.writeControlData(d);r.addClass("sapSuiteUiCommonsDateRangeSlider");r.writeClasses();r.write(">");r.renderControl(d._oDateRangeSliderInternal);r.write("</span>");};return D;},true);
