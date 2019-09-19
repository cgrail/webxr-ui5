/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global"],function(q){"use strict";var V={};V.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapVizKitViewport");r.writeClasses();r.writeAttribute("tabindex",0);r.writeAttribute("aria-label","Image");r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");var t=c.getTools();for(var i=0;i<t.length;i++){var _=sap.ui.getCore().byId(t[i]);var a=_.getGizmoForContainer(c);if(a&&a.hasDomElement()){r.renderControl(a);}}r.write("</div>");};return V;},true);
