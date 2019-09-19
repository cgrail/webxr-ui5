/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var D;var a={};a._d3Path=sap.ui.require.toUrl("sap/ui/thirdparty")+"/d3.js";a.run=function(p,r){a.getD3().then(function(D){var g=p.graph;var f=D.layout.force().nodes(g.nodes).links(g.links).alpha(p.alpha).friction(p.friction).charge(p.charge).start();setTimeout(f.stop,p.maximumDuration);f.on("end",function(){r(g);});});};a.layout=function(p){return new Promise(function(r,b){a.run(p,r);});};a.getD3=function(){if(D){return Promise.resolve(D);}else{return new Promise(function(r){sap.ui.require(["sap/ui/thirdparty/d3"],function(d){D=d;r(d);});});}};return a;},true);
