/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/model/json/JSONModel','sap/ui/base/ManagedObject','sap/ui/mdc/ResourceModel'],function(J,M,R){"use strict";var i=R.getModel();i.bindContext=i.bindContext||function(){return{initialize:function(){},attachChange:function(){},detachChange:function(){},attachEvents:function(){},detachEvents:function(){},updateRequired:function(){},destroy:function(){},getContext:function(){}};};function r(n,v){var f=this,N="this",I=N+".i18n",c={},A=new J(n),m=n.getAttribute("metadataContexts"),o,s=v.getSettings();c[I]=i.getContext("/");if(!s[f]){s[f]={};}return v.visitAttributes(n).then(function(){A._getObject=function(p,b){return n.getAttribute(p);};A.getContextName=function(){return N;};if(m){o=m?M.bindingParser(m):{parts:[]};if(!o.parts){o={parts:[o]};}for(var j=0;j<o.parts.length;j++){a(c,v,o.parts[j],o);v=v["with"](c,false);}}A.$$valueAsPromise=true;c[N]=A.getContext("/");var C=v["with"](c,true);return C.insertFragment(f,n);});}function a(c,v,C,m){var k=C.name||C.model||undefined;if(m[k]){return;}try{c[k]=v.getContext(C.model+">"+C.path);m[k]=c[k];}catch(e){}}return{resolve:r};});
