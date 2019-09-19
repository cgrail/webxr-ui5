/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Control","sap/ui/core/Core"],function(C,a){"use strict";var A=C.extend("sap.gantt.control.AssociateContainer",{metadata:{properties:{enableRootDiv:{type:"boolean",defaultValue:false}},associations:{content:{type:"sap.ui.core.Control",multiple:false}}}});A.prototype.setContent=function(c){this.setAssociation("content",c);if(c){var o=typeof(c)==="string"?a.byId(c):c;o._oAC=this;}return this;};return A;},true);
