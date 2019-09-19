/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var T={};T.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiTF");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiTFOuterCont");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiTFOuterCircle");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiTFVerticalLine");r.writeClasses();r.write(">");r.write("</div>");for(var i=0;i<c._aQuadrants.length;i++){r.renderControl(c._aQuadrants[[1,0,3,2][i]]);}r.write("</div>");r.write("<div");r.addClass("sapSuiteUiTFCentralCircle");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiTFCentralTopLabel");r.writeClasses();r.write(">");r.renderControl(c._oShowSelectedLink);r.write("</div>");r.renderControl(c._oCountDisplay);r.write("</div>");r.write("</div>");r.write("<div");r.addClass("sapSuiteUiTFRightPanel");r.writeClasses();r.write(">");r.renderControl(c._oRightPanel);r.write("</div>");r.write("<div");r.addClass("sapSuiteUiTFVM");r.writeClasses();r.write(">");r.renderControl(c.oVariantManagement);r.write("</div>");r.write("</div>");};return T;},true);
