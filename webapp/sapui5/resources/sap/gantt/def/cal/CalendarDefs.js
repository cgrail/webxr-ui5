/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/def/SvgDefs"],function(S){"use strict";var C=S.extend("sap.gantt.def.cal.CalendarDefs",{});C.prototype.getRefString=function(c){var i="";if(this.getParent()&&this.getParent().getId()){i=this.getParent().getId();}return"url(#"+i+"_"+c+")";};return C;},true);
