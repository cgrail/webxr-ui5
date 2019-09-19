/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/ext/ubc/UbcPolygon"],function(U){"use strict";var a=U.extend("sap.gantt.shape.ext.ubc.UbcOverCapacityZonePolygon",{});a.prototype.getFill=function(d,r){if(this.mShapeConfig.hasShapeProperty("fill")){return this._configFirst("fill",d);}var c,p;if(this.mShapeConfig.hasShapeProperty("backgroundColor")){c=this._configFirst("backgroundColor",d);}if(this.mShapeConfig.hasShapeProperty("pattern")){p=this._configFirst("pattern",d);}var P;if(c&&p){P="pattern_"+p+"_"+(c.indexOf("#")==0?c.substring(1,c.length):c);}if(P&&sap.ui.getCore().byId(P)){return sap.ui.getCore().byId(P).getRefString();}};a.prototype.getStroke=function(d,r){if(this.mShapeConfig.hasShapeProperty("stroke")){return this._configFirst("stroke",d);}return"#CAC7BA";};a.prototype.getStrokeWidth=function(d,r){if(this.mShapeConfig.hasShapeProperty("strokeWidth")){return this._configFirst("strokeWidth",d);}return 0.3;};a.prototype.getPoints=function(d,r){if(this.mShapeConfig.hasShapeProperty("points")){return this._configFirst("points",d);}var o="";var v=this.getShapeViewBoundary();if(v){o=v[0]+","+r.y+" "+(v[1]-v[0])+","+r.y+" "+(v[1]-v[0])+","+(r.y+r.rowHeight)+" "+v[0]+","+(r.y+r.rowHeight);return o;}};return a;},true);
