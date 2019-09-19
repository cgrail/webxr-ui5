/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var U={};U.find=function(a,c,t){var i;if(typeof a.find==="function"){return a.find(c,t);}else{for(i=0;i<a.length;i++){if(c.call(t,a[i],i,a)){return a[i];}}return undefined;}};U.trimText=function(t,c){if(t&&t.length>c){return t.substring(0,c)+" ... ";}return t;};return U;},true);
