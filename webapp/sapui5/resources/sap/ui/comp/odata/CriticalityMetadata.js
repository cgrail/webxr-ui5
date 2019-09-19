/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var c={"com.sap.vocabularies.UI.v1.CriticalityType/Neutral":0,"com.sap.vocabularies.UI.v1.CriticalityType/Negative":1,"com.sap.vocabularies.UI.v1.CriticalityType/Critical":2,"com.sap.vocabularies.UI.v1.CriticalityType/Positive":3};var C={0:"None",1:"Error",2:"Warning",3:"Success"};var m={0:"sap-icon://status-inactive",1:"sap-icon://status-negative",2:"sap-icon://status-critical",3:"sap-icon://status-positive"};var a={getCriticalityState:function(t){if(typeof t==="string"){t=c[t];}return C[t];},getCriticalityIcon:function(t){if(typeof t==="string"){t=c[t];}return m[t];},getShowCriticalityIcon:function(t){return t==="com.sap.vocabularies.UI.v1.CriticalityRepresentationType/WithoutIcon"?false:true;}};return a;},true);
