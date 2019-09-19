/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape","sap/gantt/misc/Utility"],function(S,U){"use strict";var P=S.extend("sap.gantt.shape.Polygon",{metadata:{properties:{tag:{type:"string",defaultValue:"polygon"},points:{type:"string"}}}});P.prototype.init=function(){S.prototype.init.apply(this,arguments);var r=sap.ui.getCore().getLibraryResourceBundle("sap.gantt");this.setProperty("ariaLabel",r.getText("ARIA_POLYGON"));};P.prototype.getPoints=function(d,r){if(this.mShapeConfig.hasShapeProperty("points")){return this._configFirst("points",d);}var m=this.mChartInstance.getSapUiSizeClass();var c=this.getRotationCenter(d,r),n=U.scaleBySapUiSize(m,8),a=U.scaleBySapUiSize(m,4),b=U.scaleBySapUiSize(m,4*Math.sqrt(3)),R=[];if(c&&c.length===2&&jQuery.isNumeric(n)&&jQuery.isNumeric(a)&&jQuery.isNumeric(b)){R.push([c[0]-b,c[1]-a].join(","));R.push([c[0],c[1]-n].join(","));R.push([c[0]+b,c[1]-a].join(","));R.push([c[0]+b,c[1]+a].join(","));R.push([c[0],c[1]+n].join(","));R.push([c[0]-b,c[1]+a].join(","));}return R.join(" ");};P.prototype.getStyle=function(d,r){var i=S.prototype.getStyle.apply(this,arguments);var s={"fill":this.determineValueColor(this.getFill(d,r)),"fill-opacity":this.getFillOpacity(d,r)};return i+this.getInlineStyle(s);};return P;},true);
