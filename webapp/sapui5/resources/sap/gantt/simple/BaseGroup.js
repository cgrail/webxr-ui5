/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./BaseShape","./AggregationUtils","./RenderUtils"],function(B,A,R){"use strict";var a=B.extend("sap.gantt.simple.BaseGroup",{metadata:{aggregations:{shapes:{type:"sap.gantt.simple.BaseShape",multiple:true,singularName:"shape"}}}});var m=["filter","opacity","transform"];a.prototype.renderElement=function(r,g){r.write("<g");this.writeElementData(r);r.writeClasses(this);R.renderAttributes(r,g,m);r.write(">");R.renderTooltip(r,g);this.renderChildElements(r,g);r.write("</g>");B.prototype.renderElement.apply(this,arguments);};a.prototype.renderChildElements=function(r,g){this._eachChildOfGroup(g,function(c){if(c.renderElement){c.setProperty("childElement",true,true);c.setProperty("rowYCenter",g.getRowYCenter(),true);c._iBaseRowHeight=g._iBaseRowHeight;c.renderElement(r,c);}});};a.prototype._eachChildOfGroup=function(g,c){A.eachNonLazyAggregation(g,c);};return a;},true);
