/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/core/Control","sap/base/Log"],function(B,C,L){"use strict";var H;var a=B.extend("sap.suite.ui.commons.util.HtmlElementRenderer",{constructor:function(h){B.apply(this,arguments);this._oHtmlElement=h;}});a.prototype.render=function(r){r.write("<");r.writeEscaped(this._oHtmlElement._sName);this._renderAttributes(r);if(this._oHtmlElement._aChildren.length>0){r.write(">");this._renderChildren(r);r.write("</");r.writeEscaped(this._oHtmlElement._sName);r.write(">");}else{r.write("/>");}};a.prototype._renderAttributes=function(r){var b=this._oHtmlElement._mAttributes;for(var c in b){if(!b.hasOwnProperty(c)){continue;}var v=b[c];if(Array.isArray(v)){var j="";if(c==="class"){j=" ";}else if(c==="style"){j=";";}v=v.join(j);}r.write(" ");r.write(c);r.write("=\"");r.write(v);r.write("\"");}};a.prototype._renderChildren=function(r){if(typeof H==="undefined"){H=sap.ui.require("sap/suite/ui/commons/util/HtmlElement");}this._oHtmlElement._aChildren.forEach(function(c){if(typeof c==="string"){r.write(c);}else if(H&&c instanceof H){c.getRenderer().render(r);}else if(c instanceof C){r.renderControl(c);}else{L.error(typeof c+" cannot be a child of a HTML element. Skipping rendering for this child.");}});};return a;});
