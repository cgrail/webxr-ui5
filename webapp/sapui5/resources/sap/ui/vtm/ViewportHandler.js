/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/vk/ViewportHandler"],function(q,S){"use strict";var V=sap.ui.vk.ViewportHandler.extend("sap.ui.vtm.ViewportHandler",{constructor:function(v){sap.ui.vk.ViewportHandler.prototype.constructor.call(this,v._getVkViewport());this._vtmViewport=v;},hover:function(e){if(e.n==1&&this._inside(e)&&this._rect){var x=e.x-this._rect.x,y=e.y-this._rect.y;var n=this._viewport.hitTest(x,y);this._vtmViewport._raiseHover(x,y,n);}},beginGesture:function(e){this._vtmViewport._raiseBeginGesture();S.prototype.beginGesture.call(this,e);},endGesture:function(e){this._vtmViewport._raiseEndGesture();S.prototype.endGesture.call(this,e);}});return V;});
