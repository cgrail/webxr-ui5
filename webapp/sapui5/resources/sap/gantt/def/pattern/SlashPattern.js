/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./PatternBase"],function(P){"use strict";var S=P.extend("sap.gantt.def.pattern.SlashPattern",{library:"sap.gantt",metadata:{properties:{path:{type:"string",defaultValue:null},stroke:{type:"sap.gantt.ValueSVGPaintServer"},strokeWidth:{type:"int",defaultValue:2}}}});S.prototype.getPath=function(){var t=this.getTileWidth();var a=this.getTileHeight();var s="";s=s.concat("M-").concat(t/4).concat(",").concat(a/4).concat(" ");s=s.concat("l").concat(t/2).concat(",-").concat(a/2).concat(" ");s=s.concat("M0").concat(",").concat(a).concat(" ");s=s.concat("l").concat(t).concat(",-").concat(a).concat(" ");s=s.concat("M").concat(t/4*3).concat(",").concat(a/4*5).concat(" ");s=s.concat("l").concat(t/2).concat(",-").concat(a/2).concat(" ");return s;};S.prototype.getDefString=function(){return"<pattern class='pattern' id='"+this.getId()+"' patternUnits='userSpaceOnUse' x='0' y='0' width='"+this.getTileWidth()+"' height='"+this.getTileHeight()+"'><rect x='0' width='"+this.getTileWidth()+"' height='"+this.getTileHeight()+"' fill='"+this.getBackgroundColor()+"' fill-opacity='"+this.getBackgroundFillOpacity()+"'></rect><path d='"+this.getPath()+"' stroke='"+this.getStroke()+"' stroke-width='"+this.getStrokeWidth()+"'></path></pattern>";};return S;},true);
