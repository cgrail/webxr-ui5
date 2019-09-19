/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/fl/changeHandler/PropertyChange","sap/base/Log"],function(B,P,L){var a=B.extend("sap.suite.ui.commons.flexibility.changeHandler.PropertyChangeMapper",{constructor:function(p,v){if(typeof p==="function"){this._fnProperty=p;}else if(typeof p==="string"){this._fnProperty=function(){return p;};}else{L.fatal("Incorrect type of property: "+typeof p);}if(typeof v==="function"){this._fnValue=v;}else{this._fnValue=function(){return v;};}}});a.prototype.applyChange=function(c,C,p){var o=c.getDefinition().content,b=o.property;if(Array.isArray(b)){b.forEach(function(s){o.property=s;P.applyChange(c,C,p);});}else{P.applyChange(c,C,p);}};a.prototype.completeChangeContent=function(c,s){var p=this._fnProperty(s),m=Object.assign(s,{content:{property:p,newValue:this._fnValue(p)}});P.completeChangeContent(c,m);};return a;});
