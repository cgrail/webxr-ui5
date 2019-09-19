/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(function(){"use strict";var O={};O.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiVkOverlay");r.writeClasses(c);r.write(">");r.write("</div>");var a;if((a=c._update())){c._load(a);}};return O;},true);
