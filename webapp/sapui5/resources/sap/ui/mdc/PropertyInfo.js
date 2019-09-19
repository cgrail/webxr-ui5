/*
 * !SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/base/ManagedObject','sap/ui/mdc/library'],function(M,m){"use strict";var F=m.FilterExpression;var P=M.extend("sap.ui.mdc.PropertyInfo",{metadata:{library:"sap.ui.mdc",properties:{name:{type:"string",defaultValue:null},path:{type:"string",defaultValue:null},label:{type:"string",defaultValue:null},type:{type:"string",defaultValue:"string"},constraints:{type:"object",defaultValue:null},sortable:{type:"boolean",defaultValue:true},filterable:{type:"boolean",defaultValue:true},filterExpression:{type:"sap.ui.mdc.FilterExpression",defaultValue:F.Multi},required:{type:"boolean",defaultValue:false},tooltip:{type:"string",defaultValue:null},filterConditions:{type:"object[]",group:"Data",defaultValue:[]},defaultFilterConditions:{type:"object[]",group:"Data",defaultValue:[]},hiddenFilter:{type:"boolean",defaultValue:false},visible:{type:"boolean",defaultValue:false},hasFieldHelp:{type:"boolean",defaultValue:false},fieldHelp:{type:"string",defaultValue:null},fieldHelpTitle:{type:"string",defaultValue:null},fieldHelpDescriptionPath:{type:"string",defaultValue:null},fieldHelpShowConditionPanel:{type:"boolean",defaultValue:false}}}});return P;},true);
