/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var C=E.extend("sap.ui.mdc.Column",{metadata:{defaultAggregation:"template",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},header:{type:"string"},hAlign:{type:"sap.ui.core.HorizontalAlign",defaultValue:"Begin"},initialIndex:{type:"int",defaultValue:-1},dataProperties:{type:"string[]",defaultValue:[]}},events:{},aggregations:{template:{type:"sap.ui.core.Control",multiple:false}}}});C.prototype.setTemplate=function(t){this._oTemplate=t;return this;};C.prototype.getTemplate=function(c){if(c&&this._oTemplateClone&&this._oTemplateClone.bIsDestroyed){this._oTemplateClone=null;}if(!this._oTemplateClone&&this._oTemplate){this._oTemplateClone=this._oTemplate.clone();}return c?this._oTemplateClone:this._oTemplate;};C.prototype.exit=function(){if(this._oTemplateClone){this._oTemplateClone.destroy();this._oTemplateClone=null;}if(this._oTemplate){this._oTemplate.destroy();this._oTemplate=null;}};return C;},true);
