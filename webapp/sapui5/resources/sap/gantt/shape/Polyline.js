/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape","sap/gantt/misc/Utility"],function(S,U){"use strict";var P=S.extend("sap.gantt.shape.Polyline",{metadata:{properties:{tag:{type:"string",defaultValue:"polyline"},fill:{type:"string",defaultValue:"none"},points:{type:"string"}}}});P.prototype.init=function(){S.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_CIRCLE"));};P.prototype.getPoints=function(d,r){if(this.mShapeConfig.hasShapeProperty("points")){return this._configFirst("points",d);}var c=this.getRotationCenter(d,r),R=[];var m=this.mChartInstance.getSapUiSizeClass();if(c&&c.length===2){R.push([c[0]-15,c[1]].join(","));R.push([c[0]-10,c[1]].join(","));R.push([c[0]-5,c[1]-U.scaleBySapUiSize(m,7.5)].join(","));R.push([c[0]+5,c[1]+U.scaleBySapUiSize(m,7.5)].join(","));R.push([c[0]+10,c[1]].join(","));R.push([c[0]+15,c[1]].join(","));}return R.join(" ");};P.prototype.getStyle=function(d,r){var i=S.prototype.getStyle.apply(this,arguments);var s={"fill":this.determineValueColor(this.getFill(d,r)),"fill-opacity":this.getFillOpacity(d,r)};return i+this.getInlineStyle(s);};return P;},true);
