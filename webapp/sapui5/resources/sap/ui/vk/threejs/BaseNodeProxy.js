/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../library","../BaseNodeProxy"],function(q,l,B){"use strict";var a=B.extend("sap.ui.vk.threejs.BaseNodeProxy",{metadata:{}});a.prototype.init=function(n,b){this._object3D=b;};a.prototype.reset=function(){this._object3D=null;};a.prototype.getNodeRef=function(){return this._object3D;};a.prototype.getNodeId=function(){return this._object3D;};a.prototype.getName=function(){return this._object3D.name||("<"+this._object3D.type+">");};a.prototype.getNodeMetadata=function(){return this._object3D.userData.metadata;};a.prototype.getHasChildren=function(){return this._object3D.children.length>0;};a.prototype.getSceneRef=function(){return this._object3D;};return a;});
