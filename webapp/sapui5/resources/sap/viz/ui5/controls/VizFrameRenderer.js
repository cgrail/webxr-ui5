/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var V={};V.render=function(r,c){r.write("<DIV");r.writeControlData(c);r.addClass("sapVizFrame");r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");r.write("</DIV>");};return V;},true);
