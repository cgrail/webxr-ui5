/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/adapter/AdapterFactory","./ODataPropertyAdapter","./ODataObjectAdapter","./ODataListAdapter"],function(A,O,a,b){"use strict";var c=function(){A.apply(this);};c._mAdapterByMetaPathPromiseCache={};c._mAdapterByMetaPathCache={};c.requestAdapter=function(m){var M=c._determineMetaPath(m);var k=M.getId()+">"+m.contextName+">"+m.metaPath;if(!c._mAdapterByMetaPathPromiseCache[k]){c._mAdapterByMetaPathPromiseCache[k]=new Promise(function(r,d){M.requestObject(m.metaPath).then(function(s){r(c.getAdapter(m));});});}return c._mAdapterByMetaPathPromiseCache[k];};c.getAdapter=function(m){var M=c._determineMetaPath(m);var k=M.getId()+">"+m.contextName+">"+m.metaPath;if(!c._mAdapterByMetaPathCache[k]){var d=c._getAdapterConstructor(M,m.metaPath);c._mAdapterByMetaPathCache[k]=new d(m);}return c._mAdapterByMetaPathCache[k];};c._getAdapterConstructor=function(m,M){var s=m.getObject(M);if(Array.isArray(s)){return b;}switch(s.$kind){case"Property":case"NavigationProperty":return O;case"EntityType":return a;case"EntitySet":return b;default:return O;}};c._determineMetaPath=function(m){var M=m.model.getMetaModel();if(!m.metaPath){var o=null;if(m.path.indexOf("##")>-1){o=m.model.createBindingContext(m.path);}else{o=M.getMetaContext(m.path);}m.metaPath=o.getPath();}return M;};return c;});
