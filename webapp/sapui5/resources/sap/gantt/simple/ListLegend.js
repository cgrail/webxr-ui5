/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Control","sap/gantt/library"],function(C,l){"use strict";var L=C.extend("sap.gantt.simple.ListLegend",{metadata:{library:"sap.gantt",properties:{title:{type:"string",group:"Data",defaultValue:null}},defaultAggregation:"items",aggregations:{items:{type:"sap.gantt.simple.ListLegendItem",multiple:true,singularName:"item"}}}});L.prototype.forceInvalidation=L.prototype.invalidate;L.prototype.invalidate=function(s){if(s==this){}else if(!s){this.forceInvalidation();}else if(s instanceof sap.gantt.simple.ListLegendItem){}};return L;},true);
