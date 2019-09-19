/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["../library","sap/suite/ui/commons/util/HtmlElement","sap/ui/core/Renderer"],function(l,H,R){"use strict";var C=R.extend("sap.suite.ui.commons.statusindicator.CustomShapeRenderer");C.render=function(r,c){var m=this._getHtmlModel(c);m.getRenderer().render(r);};C._getHtmlModel=function(c){var s=new H("svg");s.addControlData(c);s.setAttribute("version","1.1");s.setAttribute("xlmns","http://www.w3.org/2000/svg");var i=c._getInternalViewBox();if(i){s.setAttribute("viewBox",i);}s.setAttribute("preserveAspectRatio",c._buildPreserveAspectRatioAttribute());s.setAttribute("x",c.getX());s.setAttribute("y",c.getY());s.setAttribute("width",c.getWidth());s.setAttribute("height",c.getHeight());c.getShapes().forEach(s.addChild.bind(s));return s;};C._updateDomColor=function(c,f){c._aFillableSubShapes.forEach(function(s){var S=s.shape;var r=S.getRenderer();r._updateDomColor(S,f);});};return C;},true);
