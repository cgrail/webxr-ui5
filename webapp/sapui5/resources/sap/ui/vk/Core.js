/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/ManagedObject"],function(q,M){"use strict";var C=M.extend("sap.ui.vk.Core",{metadata:{publicMethods:["registerClass"]},constructor:function(){if(sap.ui.vk.getCore&&sap.ui.vk.getCore()){return sap.ui.vk.getCore();}M.call(this);sap.ui.vk.getCore=q.sap.getter(this);this._classes=[];}});C.prototype.registerClass=function(c){if(this._classes.indexOf(c)>=0){return this;}var t=this,f=c.getMetadata().getName(),e=f+"-created",a=f+"-destroying",b=c.prototype.register,d=c.prototype.deregister;c.prototype.register=function(){if(b){b.call(this);}t.fireEvent(e,{object:this});};c.prototype.deregister=function(){t.fireEvent(a,{object:this});if(d){d.call(this);}};this._classes.push(c);return this;};return new C();});
