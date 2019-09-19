/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library','sap/ui/core/Control','./KpiTileRenderer'],function(l,C,K){"use strict";var a=C.extend("sap.suite.ui.commons.KpiTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{value:{type:"string",group:"Misc",defaultValue:null},description:{type:"string",group:"Misc",defaultValue:null},doubleFontSize:{type:"boolean",group:"Misc",defaultValue:true},valueUnit:{type:"string",group:"Misc",defaultValue:null},valueScale:{type:"string",group:"Misc",defaultValue:null},valueStatus:{type:"sap.suite.ui.commons.ValueStatus",group:"Misc",defaultValue:"Neutral"}}}});return a;});
