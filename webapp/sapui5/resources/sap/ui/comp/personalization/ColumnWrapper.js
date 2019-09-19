/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element','sap/ui/comp/personalization/Util'],function(E,U){"use strict";var C=E.extend("sap.ui.comp.personalization.ColumnWrapper",{constructor:function(i,s){E.apply(this,arguments);},metadata:{library:"sap.ui.comp",properties:{label:{type:"string"},tooltip:{type:"string"},selected:{type:"boolean",defaultValue:false},aggregationRole:{type:"sap.ui.comp.personalization.AggregationRole"},role:{type:"string"},href:{type:"string",defaultValue:null},target:{type:"string",defaultValue:null},press:{type:"object",defaultValue:null},sorted:{type:"boolean",defaultValue:false},sortOrder:{type:"string",defaultValue:"Ascending"},hierarchyLevel:{type:"int",defaultValue:0},description:{type:"string",defaultValue:null}},associations:{chart:{type:"sap.chart.Chart",multiple:false}}}});C.prototype.getVisible=function(){var c=this.getAssociation("chart");if(typeof c==="string"){c=sap.ui.getCore().byId(c);}var v=c.getVisibleDimensions().concat(c.getVisibleMeasures());var s=U.getColumnKey(this);return v.indexOf(s)>-1;};return C;},true);
