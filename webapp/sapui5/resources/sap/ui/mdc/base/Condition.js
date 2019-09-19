/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/base/Log'],function(L){"use strict";var C=function(){};C.createItemCondition=function(k,d){var v=[k,d];if(d===null||d===undefined){v.pop();}return this.createCondition("EEQ",v);};C.createCondition=function(o,v){var c={operator:o,values:v,isEmpty:null};return c;};C.checkIsEmpty=function(c,f){if(!Array.isArray(c)){c=[c];}if(!f){throw new Error("checkIsEmpty needs FilterOperatorConfig");}c.forEach(function(o){var O=f.getOperator(o.operator);o.isEmpty=O.isEmpty(o);});};C.updateValues=function(c,f){if(!Array.isArray(c)){c=[c];}c.forEach(function(o){var O=f.getOperator(o.operator);if(o.operator!=="EEQ"){while(o.values.length!=O.valueTypes.length){if(o.values.length<O.valueTypes.length){o.values.push(null);}if(o.values.length>O.valueTypes.length){o.values=o.values.slice(0,o.values.length-1);}}}});};C._removeEmptyConditions=function(c){for(var i=c.length-1;i>-1;i--){if(c[i].isEmpty){c.splice(parseInt(i),1);}}return c;};return C;},true);
