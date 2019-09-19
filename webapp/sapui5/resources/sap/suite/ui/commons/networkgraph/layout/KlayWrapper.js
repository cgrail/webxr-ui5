/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/ObjectPool","sap/ui/Device"],function(O,D){"use strict";var k="sap.ui.thirdparty";function P(){var p=sap.ui.require.toUrl((k).replace(/\./g,"/"))+"/klay.js";this._worker=new Worker(p);}P.prototype.getWorker=function(){return this._worker;};P.prototype.init=function(){};P.prototype.reset=function(){this._worker.onmessage=null;this._worker.onerror=null;};var K={},u=!D.browser.firefox;K._pool=new O(P);K.layout=function(p){if(typeof(Worker)!=="undefined"&&u){try{var o=K._pool.borrowObject(),w=o.getWorker();w.postMessage({graph:p.graph,options:p.options});w.onmessage=function(d){if(d.data.stacktrace){p.error(d.data);}else{p.success(d.data);}K._pool.returnObject(o);};w.onerror=function(){K._pool.returnObject(o);K.run(p);};}catch(e){K.run(p);}}else{K.run(p);}};K.run=function(p){K.getKlay().then(function(o){o.layout(p);});};K.getKlay=function(){if(typeof($klay)==="undefined"){return new Promise(function(r){var m=k.replace(/\./g,"/")+"/klay";sap.ui.require([m],function(){r($klay);});});}else{return Promise.resolve($klay);}};return K;},true);
