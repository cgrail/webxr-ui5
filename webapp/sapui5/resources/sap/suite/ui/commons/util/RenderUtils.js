/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/base/Object',"sap/base/security/encodeXML"],function(B,e){"use strict";var R=function(r){this._rm=r;};R.prototype=Object.create(B.prototype||null);R.prototype._getRenderManager=function(){if(!this._rm){throw new Error("Render manager not defined");}return this._rm;};R.prototype.writeOpeningTag=function(t,T){T=T||{};var r=this._getRenderManager();var a;r.write("<");r.writeEscaped(t);if(T.classes){for(var i=0;i<T.classes.length;i++){r.addClass(e(T.classes[i]));}r.writeClasses();}if(T.attributes){for(a in T.attributes){r.writeAttribute(a,T.attributes[a]);}}if(T.escapedAttributes){for(a in T.escapedAttributes){r.writeAttributeEscaped(a,T.escapedAttributes[a]);}}r.write(">");};R.prototype.writeClosingTag=function(t){var r=this._getRenderManager();r.write("</");r.writeEscaped(t);r.write(">");};return R;},true);
