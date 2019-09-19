/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var C=E.extend("sap.ui.mdc.base.filterbar.ConditionsData",{metadata:{library:"sap.ui.mdc",properties:{fieldPath:{type:"string",defaultValue:null},conditions:{type:"object",defaultValue:[]},outValues:{type:"string[]",defaultValue:[]}}}});C.prototype.setConditions=function(v){if(typeof v==="string"){v=JSON.parse(v);}if(!Array.isArray(v)){v=[v];}this.setProperty("conditions",v);};return C;},true);
