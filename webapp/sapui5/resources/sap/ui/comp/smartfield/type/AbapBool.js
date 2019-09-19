/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/FormatException","sap/ui/model/ParseException","sap/ui/model/SimpleType"],function(F,P,S){"use strict";var A=S.extend("sap.ui.comp.smartfield.type.AbapBool",{constructor:function(){S.apply(this,arguments);this.sName="sap.ui.comp.smartfield.type.AbapBool";}});A.prototype.formatValue=function(v,t){if(v===undefined||v===null){return null;}switch(t){case"boolean":case"any":return v==="X";default:throw new F("Don't know how to format Boolean to "+t);}};A.prototype.parseValue=function(v,s){switch(s){case"boolean":return(v===true)?"X":"";default:throw new P("Don't know how to parse Boolean from "+s);}};A.prototype.validateValue=function(v){if(v!==null&&v!==undefined){if(v!=="X"&&v!==""){throw new P("Invalid Boolean "+v);}}};return A;},true);
