/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/ui/core/EnabledPropagator","./FlexibleControlRenderer"],function(q,C,E,F){"use strict";var a=C.extend("sap.ui.vk.FlexibleControl",{metadata:{library:"sap.ui.vk",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},layout:{type:"string",group:"Behavior",defaultValue:"Stacked"},enabled:{type:"boolean",group:"Behavior",defaultValue:true}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},designTime:true}});E.call(a.prototype);return a;},true);
