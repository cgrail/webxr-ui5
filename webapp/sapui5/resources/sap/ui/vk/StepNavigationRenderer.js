/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global"],function(q){"use strict";var S={};S.render=function(r,c){if(!c.getVisible()){return;}if(c.getShowToolbar()||c.getShowThumbnails){var w=c.getWidth()!=="auto"?c.getWidth():"100%";var h=c.getHeight()!=="auto"?c.getHeight():"auto";r.write("<div");r.addStyle("width",w);r.addStyle("height",h);r.writeControlData(c);r.addClass("sapVizKitStepNavigation");r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}if(!c.getVisible()){r.addStyle("visibility","hidden");}r.writeStyles();r.write(">");r.renderControl(c.getAggregation("layout"));if(c.getShowThumbnails()){S._renderScrollerDiv(r,c);}r.write("</div>");}};S._renderScrollerDiv=function(r,c){r.renderControl(c.getAggregation("thumbnailsContainer"));};return S;},true);
