/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Text","sap/ui/core/IconPool"],function(T,I){"use strict";var a=T.extend("sap.gantt.shape.ext.Iconfont",{metadata:{properties:{name:{type:"string"},collectionName:{type:"string"}}}});a.prototype.getText=function(d,r){if(this.mShapeConfig.hasShapeProperty("text")){return this._configFirst("text",d);}var n=this.getName(d,r),c=this.getCollectionName(d,r);if(c===""){c=undefined;}var i=I.getIconInfo(n,c);if(i){return i.content;}};a.prototype.getName=function(d){return this._configFirst("name",d);};a.prototype.getCollectionName=function(d){return this._configFirst("collectionName",d);};a.prototype.getFontFamily=function(d,r){if(this.mShapeConfig.hasShapeProperty("fontFamily")){return this._configFirst("fontFamily",d);}var n=this.getName(d,r);var c=this.getCollectionName(d,r);if(c===""){c=undefined;}var i=I.getIconInfo(n,c);if(i){return i.fontFamily;}};return a;},true);
