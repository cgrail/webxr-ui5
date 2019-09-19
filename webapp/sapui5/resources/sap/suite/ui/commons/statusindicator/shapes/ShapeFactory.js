/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/thirdparty/jquery"],function(B,q){"use strict";var l={};var S=B.extend("sap.suite.ui.commons.statusindicator.shapes.ShapeFactory");S.prototype.getShapeById=function(i){var l=this._getLoadedShapes(),s=l[i]||null;if(!s){return new Promise(function(r,a){q.ajax({url:sap.ui.require.toUrl("sap/suite/ui/commons/statusindicator")+"/shapes/"+i+".svg",dataType:"text"}).done(function(d){l[i]=d;r(d);}).fail(function(e){a(e);});});}return Promise.resolve(s);};S.prototype._getLoadedShapes=function(){return l;};S.prototype._removeAllLoadedShapes=function(){l={};};return S;});
