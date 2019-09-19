/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../library","../Scene","./NodeHierarchy"],function(q,l,S,N){"use strict";var a=S.extend("sap.ui.vk.dvl.Scene",{metadata:{},constructor:function(g,d){S.call(this);this._id=q.sap.uid();this._graphicsCore=g;this._dvlSceneRef=d;this._defaultNodeHierarchy=null;}});a.prototype.destroy=function(){if(this._defaultNodeHierarchy){this._defaultNodeHierarchy.destroy();this._defaultNodeHierarchy=null;}this._dvlSceneRef=null;this._graphicsCore=null;S.prototype.destroy.call(this);};a.prototype.getId=function(){return this._id;};a.prototype.getGraphicsCore=function(){return this._graphicsCore;};a.prototype.getDefaultNodeHierarchy=function(){if(!this._defaultNodeHierarchy){this._defaultNodeHierarchy=new N(this);}return this._defaultNodeHierarchy;};a.prototype.getSceneRef=function(){return this._dvlSceneRef;};a.prototype.setDoubleSided=function(v){this.setProperty("doubleSided",v,true);this._graphicsCore._dvl.Renderer.SetOption(sap.ve.dvl.DVLRENDEROPTION.DVLRENDEROPTION_SHOW_BACKFACING,v);return this;};return a;});
