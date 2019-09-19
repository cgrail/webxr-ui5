/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var D=E.extend("sap.gantt.def.DefBase",{metadata:{"abstract":true,properties:{defString:{type:"string",defaultValue:null},refString:{type:"string",defaultValue:null}}}});D.prototype.getRefString=function(){var d=this.getProperty("refString");return d?d:"url(#"+this.generateRefId()+")";};D.prototype.generateRefId=function(){return this.getId();};return D;},true);
