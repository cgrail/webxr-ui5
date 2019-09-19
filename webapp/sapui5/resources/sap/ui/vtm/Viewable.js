/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Element","sap/ui/vk/ContentResource"],function(q,S,a){"use strict";var V=S.extend("sap.ui.vtm.Viewable",{metadata:{properties:{source:{type:"any"},name:{type:"string"},rootNodeIds:{type:"string[]"},relativeMatrix:{type:"sap.ui.vtm.Matrix"}}},init:function(){this._vkContentResource=new sap.ui.vk.ContentResource({sourceId:this.getId(),sourceType:"vds"});this.setRelativeMatrix(sap.ui.vtm.MatrixUtilities.createIdentity());},getSourceId:function(){return this.getId();},setSource:function(s){this.setProperty("source",s);this._vkContentResource.setSource(s);return this;},setName:function(n){this.setProperty("name",n);this._vkContentResource.setName(n);return this;},setRelativeMatrix:function(m){this.setProperty("relativeMatrix",m);this._vkContentResource.setLocalMatrix(sap.ui.vtm.MatrixUtilities.toVkMatrix(m));},_getContentResource:function(){return this._vkContentResource;},getSourceString:function(){var s=this.getSource();return typeof s==="string"?s:s.name;}});return V;});
