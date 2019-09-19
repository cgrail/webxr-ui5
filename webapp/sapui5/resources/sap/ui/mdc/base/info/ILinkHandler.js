/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var I=E.extend("sap.ui.mdc.base.info.ILinkHandler",{metadata:{library:"sap.ui.mdc",properties:{modifyItemsCallback:{type:"function"}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.mdc.base.info.LinkItem",multiple:true,singularName:"item"}},associations:{sourceControl:{type:"sap.ui.core.Control",multiple:false}}}});I.prototype.hasPotentialLinks=function(){throw new Error("sap.ui.mdc.base.info.ILinkHandler: method hasPotentialLinks must be redefined");};I.prototype.determineItems=function(){throw new Error("sap.ui.mdc.base.info.ILinkHandler: method determineItems must be redefined");};return I;},true);
