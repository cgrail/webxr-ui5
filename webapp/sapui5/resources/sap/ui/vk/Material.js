/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/ManagedObject"],function(q,M){"use strict";var a=M.extend("sap.ui.vk.Material",{metadata:{properties:{"id":{type:"string"},"name":{type:"string"},"ambientColour":{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0, 0, 0, 1)"},"diffuseColour":{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0, 0, 0, 1)"},"specularColour":{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0, 0, 0, 1)"},"emissiveColour":{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0, 0, 0, 1)"},"opacity":{type:"float",defaultValue:1.0},"glossiness":{type:"float",defaultValue:0.0},"lineColour":{type:"sap.ui.core.CSSColor",defaultValue:"rgba(0, 0, 0, 1)"},"lineWidth":{type:"float",defaultValue:0.0},"textureDiffuse":{type:"sap.ui.vk.Texture",defaultValue:null},"textureBump":{type:"sap.ui.vk.Texture",defaultValue:null},"textureOpacity":{type:"sap.ui.vk.Texture",defaultValue:null},"textureReflection":{type:"sap.ui.vk.Texture",defaultValue:null},"textureEmissive":{type:"sap.ui.vk.Texture",defaultValue:null},"textureAmbientOcclusion":{type:"sap.ui.vk.Texture",defaultValue:null}}}});a.prototype.getMaterialRef=function(){return null;};return a;});
