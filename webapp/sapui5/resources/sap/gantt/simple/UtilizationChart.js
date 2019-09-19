/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","./BaseShape","./BaseRectangle","sap/gantt/misc/Format"],function(q,B,a,F){"use strict";var U=B.extend("sap.gantt.simple.UtilizationChart",{metadata:{"abstract":true,properties:{height:{type:"sap.gantt.SVGLength",defaultValue:"inherit"},overConsumptionMargin:{type:"float",defaultValue:25.0},overConsumptionColor:{type:"sap.gantt.ValueSVGPaintServer",defaultValue:"red"},remainCapacityColor:{type:"sap.gantt.ValueSVGPaintServer",defaultValue:"lightgray"}}}});U.prototype.getX=function(){return this.getXByTime(this.getTime());};U.prototype.getWidth=function(){return Math.abs(this.getXByTime(this.getEndTime())-this.getX());};U.prototype.getHeight=function(){return a.prototype.getHeight.apply(this);};U.prototype.toX=function(t){return this.getAxisTime().timeToView(F.abapTimestampToDate(t));};U.prototype.renderRectangleWithAttributes=function(r,A,t){r.write("<rect");Object.keys(A).forEach(function(n){r.writeAttribute(n,A[n]);});r.write(">");if(t){r.write("<title>");r.writeEscaped(t,true);r.write("</title>");}r.write("</rect>");};return U;},true);
