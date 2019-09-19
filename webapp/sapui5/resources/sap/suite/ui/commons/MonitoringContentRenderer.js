/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var M={};M.render=function(r,c){var s=c.getSize();var v=c.getValue();var S=c.getState();var t=c.getTooltip_AsString();r.write("<div");r.writeControlData(c);if(t){r.writeAttributeEscaped("title",t);}if(c.getAnimateTextChange()){r.addStyle("opacity","0.25");r.writeStyles();}r.addClass(s);r.addClass("sapSuiteUiCommonsMC");if(c.hasListeners("press")){r.addClass("sapSuiteUiCommonsPointer");}r.writeClasses();r.writeAttribute("tabindex","0");r.write(">");r.write("<div");r.writeAttribute("id",c.getId()+"-value");r.addClass("sapSuiteUiCommonsMCValue");r.addClass(s);r.addClass(S);r.writeClasses();r.write(">");if(v.length>=4&&(v[3]==="."||v[3]===",")){r.writeEscaped(v.substring(0,3));}else{r.writeEscaped(v?v.substring(0,4):"0");}r.write("</div>");r.write("<div");r.writeAttribute("id",c.getId()+"-icon-container");r.addClass("sapSuiteUiCommonsMCIcon");r.addClass(s);r.addClass(S);r.writeClasses();r.write(">");r.renderControl(c._oIcon);r.write("</div>");r.write("</div>");};return M;},true);
