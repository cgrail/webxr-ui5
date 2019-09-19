/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./InfoTileRenderer','sap/ui/core/Renderer'],function(I,R){"use strict";var M=R.extend(I);M.renderFooterText=function(r,c){r.write("<span");r.writeAttribute("id",c.getId()+"-footer-text");r.addClass("sapSuiteUiCommonsMTFooterText");r.addClass(c.getFooterColor());r.writeClasses();r.write(">");r.writeEscaped(c.getFooter());r.write("</span>");};return M;},true);
