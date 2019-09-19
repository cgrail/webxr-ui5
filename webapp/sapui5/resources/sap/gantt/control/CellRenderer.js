/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var C={};C.render=function(r,c){var o=c.getContentToRender();r.write("<div");r.writeControlData(c);r.write(">");if(o){r.renderControl(o);}r.write("</div>");};return C;},true);
