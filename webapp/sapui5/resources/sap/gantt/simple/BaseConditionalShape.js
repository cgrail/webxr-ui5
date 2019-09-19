/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./BaseShape"],function(B){"use strict";var P=["rowYCenter","shapeUid","selected"];var a=B.extend("sap.gantt.simple.BaseConditionalShape",{metadata:{properties:{activeShape:{type:"int",defaultValue:0}},aggregations:{shapes:{type:"sap.gantt.simple.BaseShape",multiple:true,singularName:"shape",sapGanttLazy:true}}}});a.prototype.renderElement=function(r,e){var A=e.getActiveShape(),s=e.getShapes();if(A>=0&&A<s.length){var S=s[A];S._iBaseRowHeight=e._iBaseRowHeight;S.renderElement(r,S);}};a.prototype.setProperty=function(p,v,s){B.prototype.setProperty.apply(this,arguments);if(P.indexOf(p)>=0){this.getShapes().forEach(function(S){S.setProperty(p,v,s);});}if(p==="shapeId"){this.getShapes().forEach(function(S){var b=S.getShapeId();if(!b){S.setProperty(p,v,s);}});}};return a;});
