/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/CompositeType","sap/ui/model/FormatException","sap/ui/model/ParseException"],function(C,F,P){"use strict";var D=C.extend("sap.ui.mdc.base.type.DateRange",{constructor:function(f,c){C.call(this,f,c);}});D.prototype.formatValue=function(v,t){if(!v||(!v[0]&&!v[1])){return null;}switch(t){case"any":return v;case"string":return v.join(" - ");default:throw new F("Don't know how to format "+this.getName()+" to "+t);}};D.prototype.parseValue=function(v,s){if(v===null||v===""){return null;}switch(s){case"string":return v.split(" - ");default:throw new P("Don't know how to parse "+this.getName()+" from "+s);}};D.prototype.validateValue=function(v){};return D;});
