/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["../DefBase"],function(D){"use strict";var S=D.extend("sap.gantt.def.gradient.Stop",{metadata:{properties:{offSet:{type:"string",defaultValue:"5%"},stopColor:{type:"sap.gantt.ValueSVGPaintServer",defaultValue:"#FFFFFF"}}}});S.prototype.getDefString=function(){return"<stop id='"+this.getId()+"' offset='"+this.getOffSet()+"' stop-color='"+this.getStopColor()+"' />";};return S;},true);
