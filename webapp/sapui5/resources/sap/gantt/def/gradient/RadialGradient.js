/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["../DefBase"],function(D){"use strict";var R=D.extend("sap.gantt.def.gradient.RadialGradient",{metadata:{properties:{cx:{type:"float",defaultValue:400},cy:{type:"float",defaultValue:200},r:{type:"float",defaultValue:300},fx:{type:"float",defaultValue:400},fy:{type:"float",defaultValue:200}},aggregations:{stops:{type:"sap.gantt.def.gradient.Stop",multiple:true,singularName:"stop"}}}});return R;},true);
