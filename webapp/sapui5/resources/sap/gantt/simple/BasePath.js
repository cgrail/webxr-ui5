/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./BaseShape","./RenderUtils"],function(B,R){"use strict";var a=B.extend("sap.gantt.simple.BasePath",{metadata:{properties:{d:{type:"string"}}}});var A=["d","fill","stroke-dasharray","transform","style"];a.prototype.renderElement=function(r,e){r.write("<path");this.writeElementData(r);r.writeClasses(this);R.renderAttributes(r,e,A);r.writeAttribute("shape-rendering","crispedges");r.write(">");R.renderTooltip(r,e);r.write("</path>");R.renderElementTitle(r,e);};return a;},true);
