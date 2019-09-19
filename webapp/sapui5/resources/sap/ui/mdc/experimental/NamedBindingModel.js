/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";function r(b){this._mNamedBindings=this._mNamedBindings||{};if(!this._mNamedBindings[b.sId]){this._mNamedBindings[b.sId]=b;}else if(this._mNamedBindings[b.sId].promise){var R=this._mNamedBindings[b.sId].resolve;this._mNamedBindings[b.sId]=b;R(b);}else{throw new Error('Duplicate ID for named binding: '+b.sId);}}function u(b){if(this._mNamedBindings&&this._mNamedBindings[b.sId]){delete this._mNamedBindings[b.sId];}}function g(R){this._mNamedBindings=this._mNamedBindings||{};if(typeof this._mNamedBindings[R]==="undefined"){var f,p=new Promise(function(b,c){f=b;});this._mNamedBindings[R]={promise:p,resolve:f};return p;}else if(this._mNamedBindings[R].promise){return this._mNamedBindings[R].promise;}else{return Promise.resolve(this._mNamedBindings[R]);}}function a(m){var o={};m.registerNamedBinding=r.bind(m);m.unregisterNamedBinding=u.bind(m);m.getBindingForReference=g.bind(m);o.bindList=m.bindList;m.bindList=function(p,c,s,f,P){var n=P&&P.id,l;if(n){delete P.id;}l=o.bindList.apply(this,arguments);if(n){l.sId=n;this.registerNamedBinding(l);}return l;};return Promise.resolve();}var N={upgrade:a};return N;},true);
