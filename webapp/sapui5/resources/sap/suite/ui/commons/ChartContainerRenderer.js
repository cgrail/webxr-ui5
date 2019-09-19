/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var C={};C.render=function(r,c){var s=c.getSelectedContent();r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsChartContainer");r.writeClasses();r.write(">");r.write("<div");r.writeAttributeEscaped("id",c.getId()+"-wrapper");r.addClass("sapSuiteUiCommonsChartContainerWrapper");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiCommonsChartContainerToolBarArea");r.writeClasses();r.write(">");r.renderControl(c.getToolbar());r.write("</div>");r.write("<div");r.writeAttributeEscaped("id",c.getId()+"-chartArea");r.addClass("sapSuiteUiCommonsChartContainerChartArea");r.writeClasses();r.write(">");if(s!==null){r.renderControl(s);}else if(c.getContent().length>0){s=c.getContent()[0];r.renderControl(s);}r.write("</div>");r.write("</div>");r.write("</div>");};return C;},true);
