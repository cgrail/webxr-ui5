/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./PatternBase"],function(P){"use strict";var B=P.extend("sap.gantt.def.pattern.BackSlashPattern",{metadata:{properties:{path:{type:"string"},stroke:{type:"sap.gantt.ValueSVGPaintServer"},strokeWidth:{type:"int",defaultValue:2}}}});B.prototype.getPath=function(){var t=this.getTileWidth();var a=this.getTileHeight();var s="";s=s.concat("M").concat(t/4).concat(",").concat(a/4*5).concat(" ");s=s.concat("l-").concat(t/2).concat(",-").concat(a/2).concat(" ");s=s.concat("M0,0").concat(" ");s=s.concat("l").concat(t).concat(",").concat(a).concat(" ");s=s.concat("M").concat(t/4*5).concat(",").concat(a/4).concat(" ");s=s.concat("l-").concat(t/2).concat(",-").concat(a/2).concat(" ");return s;};B.prototype.getDefString=function(){return"<pattern class='pattern' id='"+this.getId()+"' patternUnits='userSpaceOnUse' x='0' y='0' width='"+this.getTileWidth()+"' height='"+this.getTileHeight()+"'><rect x='0' width='"+this.getTileWidth()+"' height='"+(this.getTileHeight()+4)+"' stroke-width='"+this.getStrokeWidth()+"' fill='"+this.getBackgroundColor()+"' fill-opacity='"+this.getBackgroundFillOpacity()+"'></rect><path d='"+this.getPath()+"' stroke='"+this.getStroke()+"' stroke-width='"+this.getStrokeWidth()+"'></path></pattern>";};return B;},true);
