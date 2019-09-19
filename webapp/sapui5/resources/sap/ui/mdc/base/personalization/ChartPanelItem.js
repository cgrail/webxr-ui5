/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var C=E.extend("sap.ui.mdc.base.personalization.ChartPanelItem",{metadata:{library:"sap.ui.mdc",properties:{key:{type:"string"},text:{type:"string"},tooltip:{type:"string"},roleKey:{type:"string",invalidate:true},visible:{type:"boolean",defaultValue:false},type:{type:"string"}},defaultAggregation:"availableRoles",aggregations:{availableRoles:{type:"sap.ui.core.Item",multiple:true,singularName:"availableRole",invalidate:true}}}});return C;},true);
