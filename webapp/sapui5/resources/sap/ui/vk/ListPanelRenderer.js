/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(function(){"use strict";var L={};L.render=function(r,c){var p=c._oPanel;p.addStyleClass("sapUiVkListPanel");r.write("<div");r.writeControlData(c);r.write(">");r.renderControl(p);r.write("</div>");};return L;},true);
