/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../library","../BaseNodeProxy"],function(q,l,B){"use strict";var g=sap.ui.vk.dvl.getJSONObject;var a=B.extend("sap.ui.vk.dvl.BaseNodeProxy",{metadata:{}});a.prototype.init=function(n,b){this._dvl=n?n.getGraphicsCore()._getDvl():null;this._dvlSceneRef=n?n.getSceneRef():null;this._dvlNodeRef=b;};a.prototype.reset=function(){this._dvlNodeRef=null;this._dvlSceneRef=null;this._dvl=null;};a.prototype.getNodeRef=function(){return this._dvlNodeRef;};a.prototype.getNodeId=function(){return this._dvlNodeRef;};a.prototype.getName=function(){return g(this._dvl.Scene.RetrieveNodeInfo(this._dvlSceneRef,this._dvlNodeRef,sap.ve.dvl.DVLNODEINFO.DVLNODEINFO_NAME)).NodeName;};a.prototype.getNodeMetadata=function(){return g(this._dvl.Scene.RetrieveMetadata(this._dvlSceneRef,this._dvlNodeRef)).metadata;};a.prototype.getHasChildren=function(){return(g(this._dvl.Scene.RetrieveNodeInfo(this._dvlSceneRef,this._dvlNodeRef,sap.ve.dvl.DVLNODEINFO.DVLNODEINFO_FLAGS)).Flags&(sap.ve.dvl.DVLNODEFLAG.DVLNODEFLAG_MAPPED_HASCHILDREN|sap.ve.dvl.DVLNODEFLAG.DVLNODEFLAG_CLOSED))===sap.ve.dvl.DVLNODEFLAG.DVLNODEFLAG_MAPPED_HASCHILDREN;};a.prototype.getSceneRef=function(){return this._dvlNodeRef;};return a;});
