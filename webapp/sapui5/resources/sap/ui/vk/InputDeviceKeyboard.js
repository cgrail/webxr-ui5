/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/EventProvider"],function(q,E){"use strict";var I=E.extend("sap.ui.vk.InputDeviceKeyboard",{metadata:{publicMethods:["enable","disable"]},constructor:function(l){this._loco=l;}});I.prototype.enable=function(c){this._control=c;this._control.attachBrowserEvent("keydown keyup keypress",this._onKeyEvent,this);};I.prototype.disable=function(){this._control.detachBrowserEvent("keydown keyup keypress",this._onKeyEvent,this);};I.prototype._onKeyEvent=function(e){this._loco.keyEventHandler(e,this._control);};return I;},true);
