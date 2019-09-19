/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var L=B.extend("sap.suite.ui.commons.networkgraph.layout.LayoutTask",{constructor:function(p){B.apply(this,arguments);this._bTerminated=false;this._oPromise=new Promise(function(r,a){p(r,a,this);}.bind(this));}});L.prototype.then=function(o,O){this._oPromise=this._oPromise.then(o,O);return this;};L.prototype.catch=function(o){this._oPromise=this._oPromise.catch(o);return this;};L.prototype.terminate=function(){this._bTerminated=true;return this;};L.prototype.isTerminated=function(){return this._bTerminated;};return L;});
