/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['jquery.sap.global',"sap/ui/Device"],function(q,D){"use strict";var x={};var C={xPosOfEvent:function(e){return D.browser.edge?e.clientX:e.pageX;},xPosOfSvgElement:function(e,$){return this.xPosOfEvent(e)-($.offset().left||e.offsetX);},getEventSVGPoint:function(s,e){var c=s.createSVGPoint();c.x=this.xPosOfEvent(e);c.y=e.pageY||e.clientY;c=c.matrixTransform(s.getScreenCTM().inverse());c.svgId=s.id;return c;},getSvgScreenPoint:function(s,e){var c=s.createSVGPoint();c.x=this.xPosOfEvent(e);c.y=e.pageY||e.clientY;c=c.matrixTransform(s.getScreenCTM());c.svgId=s.id;return c;},getEventPosition:function(e){return{pageX:this.xPosOfEvent(e),pageY:e.pageY};},updateCursorPosition:function(e){x={pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY};},getLatestCursorPosition:function(){return x;},getCursorElement:function(){var e=document.elementFromPoint(x.clientX,x.clientY);return q(e).control(0);}};return C;},true);
