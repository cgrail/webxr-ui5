/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Rectangle"],function(R){"use strict";var U=R.extend("sap.gantt.shape.ext.ulc.UlcRectangle",{metadata:{"abstract":true}});U.prototype.getFill=function(){return R.prototype.getFill.apply(this,arguments)||"transparent";};U.prototype.getX=function(d,r){if(this.mShapeConfig.hasShapeProperty("x")){return this._configFirst("x",d);}var v=this.getShapeViewBoundary();if(v){return v[0];}return 0;};U.prototype.getY=function(d,r){if(this.mShapeConfig.hasShapeProperty("y")){return this._configFirst("y",d);}return r.y;};U.prototype.getWidth=function(d,r){if(this.mShapeConfig.hasShapeProperty("width")){return this._configFirst("width",d);}var v=this.getShapeViewBoundary();if(v){return v[1]-v[0];}return 0;};U.prototype.getHeight=function(d,r){if(this.mShapeConfig.hasShapeProperty("height")){return this._configFirst("height",d);}var m=25;if(this.mShapeConfig.hasShapeProperty("maxVisibleRatio")){m=this._configFirst("maxVisibleRatio",d);}return r.rowHeight*m/(100+m);};return U;},true);
