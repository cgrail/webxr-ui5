/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./CustomShape","./CustomShapeRenderer","./shapes/ShapeFactory"],function(C,a,S){"use strict";var L=C.extend("sap.suite.ui.commons.statusindicator.LibraryShape",{metadata:{properties:{shapeId:{type:"string",group:"Misc",defaultValue:null}},events:{"afterShapeLoaded":{}}},renderer:a});L.prototype.setShapeId=function(s){s=this._getValidShapeId(s);this.setProperty("shapeId",s,true);new S().getShapeById(s).then(function(d){this.setDefinition(d);this.fireAfterShapeLoaded();}.bind(this));return this;};L.prototype._getValidShapeId=function(s){return s.replace(/[\\\.\/]/g,"");};return L;});
