/*!
* SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
*/
sap.ui.define(["jquery.sap.global"],function(q){"use strict";var V={};V.render=function(r,c){r.write("<div");r.writeControlData(c);r.writeAttribute("tabindex",0);r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapUiVbmViewport");r.writeClasses();r.write(">");r.write("</div>");};return V;},true);
