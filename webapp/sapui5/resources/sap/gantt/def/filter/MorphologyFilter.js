/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/library","../DefBase"],function(l,D){"use strict";var M=D.extend("sap.gantt.def.filter.MorphologyFilter",{metadata:{properties:{operator:{type:"string",defaultValue:l.def.filter.MorphologyOperator.Dilate},radius:{type:"string",defaultValue:"2,1"},colorMatrix:{type:"string",defaultValue:l.def.filter.ColorMatrixValue.AllToWhite}}}});M.prototype.getDefString=function(){return"<filter id='"+this.getId()+"'>"+"<feMorphology in='SourceAlpha' result='morphed' operator='"+this.getOperator()+"' radius='"+this.getRadius()+"'/>"+"<feColorMatrix in='morphed' result='recolored' type='matrix' values='"+this.getColorMatrix()+"'/>"+"<feMerge>"+"<feMergeNode in='recolored'/>"+"<feMergeNode in='SourceGraphic'/>"+"</feMerge>"+"</filter>";};return M;},true);
