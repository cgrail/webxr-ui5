/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Element","./ArrayUtilities"],function(q,S,a){"use strict";var L=S.extend("sap.ui.vtm.Lookup",{init:function(){this.clear();},addValue:function(k,v){var b=this._valuesByKey;var c=b.get(k);if(c){c.push(v);}else{b.set(k,[v]);}return this;},removeValue:function(k,v,e){if(!e){e=function(c,d){return c===d;};}var b=this._valuesByKey.get(k);if(b){var i=sap.ui.vtm.ArrayUtilities.findIndex(b,function(c){return e(v,c);});if(i>=0){b.splice(i,1);if(b.length==0){this._valuesByKey.delete(k);}}}return this;},clear:function(){this._valuesByKey=new Map();return this;},hasValue:function(k){return this._valuesByKey.has(k);},getValues:function(k){var v=this._valuesByKey.get(k);if(v){v=v.slice();}return v||[];},forEach:function(c){this._valuesByKey.forEach(c);return this;}});return L;});
