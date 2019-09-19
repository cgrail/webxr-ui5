/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/thirdparty/jquery','./Factory'],function(q,F){"use strict";function a(){}a.enableFakeConnector=function(s){if(a.getServiceReal){return;}a.getServiceReal=F.getService;F.getService=a._createFakeService(s);};a._createFakeService=function(s){return function(S){switch(S){case"CrossApplicationNavigation":return{hrefForExternal:function(t){if(!t||!t.target||!t.target.shellHash){return null;}return t.target.shellHash;},getDistinctSemanticObjects:function(){var b=[];for(var c in s){b.push(c);}var d=q.Deferred();setTimeout(function(){d.resolve(b);},0);return d.promise();},getLinks:function(p){var l=[];if(!Array.isArray(p)){s[p.semanticObject]?l=s[p.semanticObject].links:l=[];}else{p.forEach(function(P){s[P[0].semanticObject]?l.push([s[P[0].semanticObject].links]):l.push([[]]);});}var d=q.Deferred();setTimeout(function(){d.resolve(l);},0);return d.promise();}};case"URLParsing":return{parseShellHash:function(i){var f=function(L){var c=L.filter(function(l){return l.intent===i;});return c[0];};for(var b in s){var l=f(s[b].links);if(l){return{semanticObject:b,action:l.action};}}return{semanticObject:null,action:null};}};default:return a.getServiceReal(S);}};};a.disableFakeConnector=function(){if(a.getServiceReal){F.getService=a.getServiceReal;a.getServiceReal=undefined;}};return a;},true);
