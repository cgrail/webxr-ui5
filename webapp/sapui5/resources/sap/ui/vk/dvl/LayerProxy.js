/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../library","../LayerProxy"],function(q,l,L){"use strict";var g=sap.ui.vk.dvl.getJSONObject;var a=L.extend("sap.ui.vk.dvl.LayerProxy",{metadata:{publicMethods:["getDescription","getLayerId","getLayerMetadata","getName","getNodes","getVeIds"]},constructor:function(n,b){L.call(this);this._dvl=n?n.getGraphicsCore()._getDvl():null;this._dvlSceneRef=n?n.getSceneRef():null;this._dvlLayerId=b;}});a.prototype.destroy=function(){this._dvlLayerId=null;this._dvlSceneRef=null;this._dvl=null;L.prototype.destroy.call(this);};a.prototype.getLayerId=function(){return this._dvlLayerId;};a.prototype.getVeIds=function(){return g(this._dvl.Scene.RetrieveVEIDs(this._dvlSceneRef,this._dvlLayerId));};a.prototype.getName=function(){return g(this._dvl.Scene.RetrieveLayerInfo(this._dvlSceneRef,this._dvlLayerId)).name;};a.prototype.getDescription=function(){return g(this._dvl.Scene.RetrieveLayerInfo(this._dvlSceneRef,this._dvlLayerId)).description;};a.prototype.getLayerMetadata=function(){return g(this._dvl.Scene.RetrieveMetadata(this._dvlSceneRef,this._dvlLayerId)).metadata;};a.prototype.getNodes=function(){return g(this._dvl.Scene.RetrieveLayerInfo(this._dvlSceneRef,this._dvlLayerId)).nodes;};return a;});
