/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/EventProvider"],function(q,E){"use strict";var R=E.extend("sap.ui.vk.helpers.RotateTurntableHelperDvl",{metadata:{publicMethods:["rotate"]},constructor:function(a,D){this._tool=a;this._dvl=D;this._dvlRendererId=this._tool._viewport._dvlRendererId;}});R.prototype.destroy=function(){this._rotateOrbitTool=null;};R.prototype.activateTurntableMode=function(){if(this._dvlRendererId){this._dvl.Renderer.SetOption(sap.ve.dvl.DVLRENDEROPTION.DVLRENDEROPTION_CAMERA_ROTATION_MODE_ORBIT,false);}return this;};R.prototype.deactivateTurntableMode=function(){if(this._dvlRendererId){this._dvl.Renderer.SetOption(sap.ve.dvl.DVLRENDEROPTION.DVLRENDEROPTION_CAMERA_ROTATION_MODE_ORBIT,true);}return this;};R.prototype.rotate=function(d,a){if(this._dvlRendererId){this._dvl.Renderer.Rotate(d*window.devicePixelRatio,a*window.devicePixelRatio,this._dvlRendererId);this._tool.fireRotate({dx:d,dy:a});}return this;};return R;},true);
