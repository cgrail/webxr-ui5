/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/ManagedObject"],function(q,M){"use strict";var C=M.extend("sap.ui.vk.ContentManager",{metadata:{"abstract":true,library:"sap.ui.vk",events:{contentChangesStarted:{parameters:{}},contentChangesFinished:{parameters:{content:{type:"any"},failureReason:{type:"object"}}},contentChangesProgress:{parameters:{phase:{type:"string"},percentage:{type:"float"},source:{type:"any"}}}}}});var b=C.getMetadata().getParent().getClass().prototype;C.prototype.init=function(){if(b.init){b.init.call(this);}this._decryptionHandler=null;this._authorizationHandler=null;};C.prototype.destroyContent=function(c){return this;};C.prototype.collectGarbage=function(){return this;};C.prototype.createOrthographicCamera=function(){return null;};C.prototype.createPerspectiveCamera=function(){return null;};C.prototype.destroyCamera=function(c){return this;};C.prototype.setDecryptionHandler=function(h){this._decryptionHandler=h;return this;};C.prototype.setAuthorizationHandler=function(h){this._authorizationHandler=h;return this;};return C;});
