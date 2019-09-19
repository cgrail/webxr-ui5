/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var C={};C.extendScales=function(){var o={},t=arguments[0]||[],i=0,l=t.length,r=[];for(;i<l;i++){o[t[i].feed]=t[i];}for(i=1,l=arguments.length;i<l;i++){var s=arguments[i];for(var j=0,a=s.length;j<a;j++){o[s[j].feed]=s[j];}}for(i in o){r.push(o[i]);}return r;};return C;});
