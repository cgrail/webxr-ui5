/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/model/type/Currency","sap/ui/model/ValidateException"],function(C,a,V){"use strict";var b=a.extend("sap.ui.comp.smartfield.type.Currency",{constructor:function(f,c){a.apply(this,arguments);this.bParseWithValues=true;this.sName="Currency";}});b.prototype.parseValue=function(v,i,c){var d=a.prototype.parseValue.apply(this,arguments);if(d[1]===undefined){d[1]=c[1];}return d;};b.prototype.validateValue=function(v){var s=v[0],r=/^[-+]?(\d+)(?:\.(\d+))?$/,m=r.exec(s);if((typeof s!=="string")||(m===null)){throw new V(g("EnterNumber"));}var i=m[1].length,f=(m[2]||"").length,p=this.oConstraints.precision||Infinity,c=v[1],S=this.oOutputFormat.oLocaleData.getCurrencyDigits(c),d=Math.min(this.oConstraints.scale||0,S);if(f>d){if(d===0){throw new V(g("EnterInt"));}if((i+d)>p){throw new V(g("EnterNumberIntegerFraction",[p-d,d]));}throw new V(g("EnterNumberFraction",[d]));}if(i>(p-d)){throw new V(g("EnterNumberInteger",[p-d]));}};function g(k,p){return C.getLibraryResourceBundle().getText(k,p);}b.prototype.getName=function(){return"sap.ui.comp.smartfield.type.Currency";};return b;});
