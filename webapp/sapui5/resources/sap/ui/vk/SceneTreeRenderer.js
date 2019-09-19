/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global"],function(q){"use strict";var S={};S.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapUiSizeCompact");r.addClass("sapUiVkSceneTree");r.writeClasses();r.write(">");r.renderControl(c.getAggregation("treeTable"));r.write("</div>");};return S;},true);
