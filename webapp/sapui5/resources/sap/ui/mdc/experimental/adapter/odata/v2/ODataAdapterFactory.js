/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/adapter/AdapterFactory","./ODataPropertyAdapter","./ODataObjectAdapter","./ODataListAdapter"],function(A,O,a,b){"use strict";var c=function(){A.apply(this);};c._mAdapterByMetaPathCache={};c._mMetaModelReadyPromise={};c.requestAdapter=function(m){var M=m.model.getMetaModel();var k=M.getId()+">"+m.contextName+">"+m.path;if(!c._mMetaModelReadyPromise[k]){c._mMetaModelReadyPromise[k]=new Promise(function(r,d){M.loaded().then(function(){r(c.getAdapter(m));});});}return c._mMetaModelReadyPromise[k];};c.getAdapter=function(m){var M=m.model.getMetaModel();var k=M.getId()+">"+m.contextName+">"+m.path;if(!c._mAdapterByMetaPathCache[k]){var d=c._getAdapterConstructor(M,m.path);c._mAdapterByMetaPathCache[k]=new d(m);}return c._mAdapterByMetaPathCache[k];};c._getAdapterConstructor=function(m,p){var M,s=p?p.indexOf("/##"):-1;if(p.endsWith("/")){return a;}if(s>-1){var d=p.substring(0,s);var D=m.getMetaContext(d);M=m.createBindingContext(p.substring(s+3),D);}else{M=m.getMetaContext(p);}var S=M.getObject();if(Array.isArray(S)){return b;}if(p.startsWith("/")){p=p.substring(1);}var P=p.split("/");if(P.length>1){return O;}return b;};return c;});
