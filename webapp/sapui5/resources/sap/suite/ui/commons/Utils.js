/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var U={};U._setupMobileDraggable=function($){if(sap.ui.getCore().isMobile()){var s=function(e,a){if(e.originalEvent.touches.length>1){return;}e.preventDefault();var b=e.originalEvent.changedTouches[0],c=document.createEvent('MouseEvents');c.initMouseEvent(a,true,true,window,1,b.screenX,b.screenY,b.clientX,b.clientY,false,false,false,false,0,null);e.target.dispatchEvent(c);};var t=false;$.bind({touchstart:function(e){if(t){return;}t=true;s(e,'mouseover');s(e,'mousemove');s(e,'mousedown');},touchmove:function(e){if(!t){return;}s(e,'mousemove');},touchend:function(e){if(!t){return;}s(e,'mouseup');s(e,'mouseout');s(e,'click');t=false;}});}};return U;},true);
