/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["../DefBase"],function(D){"use strict";var L=D.extend("sap.gantt.def.gradient.LinearGradient",{metadata:{properties:{x1:{type:"string",defaultValue:"0"},y1:{type:"string",defaultValue:"0"},x2:{type:"string",defaultValue:"100"},y2:{type:"string",defaultValue:"15"}},aggregations:{stops:{type:"sap.gantt.def.gradient.Stop",multiple:true,singularName:"stop"}}}});L.prototype.getDefString=function(){var r="<linearGradient id='"+this.getId()+"' x1='"+this.getX1()+"' y1='"+this.getY1()+"' x2='"+this.getX2()+"' y2='"+this.getY2()+"'>";var s=this.getStops();for(var i=0;i<s.length;i++){r=r.concat(s[i].getDefString());}r=r.concat("</linearGradient>");return r;};return L;},true);
