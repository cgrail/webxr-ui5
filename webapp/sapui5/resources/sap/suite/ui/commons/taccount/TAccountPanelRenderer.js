/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Renderer","sap/m/PanelRenderer"],function(R,P){"use strict";var T=R.extend(P),b;T.renderContent=function(r,c){b=c;P.renderContent.apply(this,[r,c]);};T.renderChildren=function(r,c){var i=b&&b.getId();if(b){var t=b.getTable();if(t){r.write("<div id=\""+i+"-table\" class=\"sapSuiteUiCommonsAccountPanelTable\">");r.renderControl(t);r.write("</div>");}}r.write("<div id=\""+i+"-datacontent\" class=\"sapSuiteUiCommonsAccountPanelContent\">");c.forEach(r.renderControl);r.write("</div>");var o=b&&b.getShowOverlay()?"sapSuiteUiCommonsAccountPanelOverlayVisible":"";r.write("<div id=\""+i+"-overlay\" class=\"sapSuiteUiCommonsAccountPanelOverlay "+o+" \">");r.write("</div>");};return T;},true);
