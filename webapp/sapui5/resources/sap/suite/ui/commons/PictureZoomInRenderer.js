/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/base/security/encodeXML"],function(e){"use strict";var P={};P.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsPictureZoomIn");r.writeClasses();r.writeAttribute("role","img");var t=c.getTooltip_AsString();if(t){r.writeAttribute("title",e(t));}r.write(">");if(c.getBusyIndicator()){r.write("<div");r.writeAttribute("id",c.getId()+"-busy");r.addClass("sapSuiteUiCommonsPictureZoomInBusy");r.writeClasses();r.write(">");r.renderControl(c.getBusyIndicator());r.write("</div>");}r.renderControl(c._oImage);r.renderControl(c._oDescription);r.write("</div>");};return P;},true);
