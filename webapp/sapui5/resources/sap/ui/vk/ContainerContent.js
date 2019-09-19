/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["./library","sap/ui/core/Control","./ContainerContentRenderer"],function(l,C,a){"use strict";var b=C.extend("sap.ui.vk.ContainerContent",{metadata:{library:"sap.ui.vk",properties:{"icon":{type:"string",group:"Misc",defaultValue:null},"title":{type:"string",group:"Misc",defaultValue:null}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:false}}}});b.prototype.setContent=function(c){if(c instanceof sap.ui.vbm.GeoMap){c.setNavcontrolVisible(false);c.setWidth("100%");c.setHeight("100%");}this.setAggregation("content",c);return this;};return b;});
