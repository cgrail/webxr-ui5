/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(function(){"use strict";var L={};L.render=function(r,c){var l=sap.ui.getCore().getConfiguration().getLanguage();var R=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.commons",l);var a="";r.write("<div");r.writeControlData(c);r.addClass("sapSuiteUiCommonsLaunchTile");r.addClass("sapSuiteUiCommonsPointer");r.writeAttribute("tabindex","0");r.writeClasses();if(c.getTooltip_AsString()){a=c.getTooltip_AsString();r.writeAttributeEscaped("title",c.getTooltip_AsString());}else{a=R.getText("LAUNCHTILE_LAUNCH")+" "+c.getTitle();}r.writeAccessibilityState(c,{role:'link',live:'assertive',label:a});r.write(">");r.write('<div id="'+c.getId()+'-launchTileText"');r.addClass("sapSuiteUiCommonsLaunchTileTitle");r.writeClasses();r.write(">");r.writeEscaped(c.getTitle());r.write("</div>");r.write('<div id="'+c.getId()+'-launchTileIcon"');r.addClass("sapSuiteUiCommonsLaunchTileIcon");r.writeClasses();r.write(">");r.renderControl(c._iconImage);r.write("</div>");r.write("</div>");};return L;},true);
