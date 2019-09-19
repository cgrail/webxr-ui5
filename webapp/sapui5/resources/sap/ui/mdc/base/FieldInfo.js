/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/mdc/base/FieldInfoBase'],function(F){"use strict";var a=F.extend("sap.ui.mdc.base.FieldInfo",{metadata:{library:"sap.ui.mdc",designtime:"sap/ui/mdc/designtime/base/FieldInfo.designtime",defaultAggregation:"contentHandler",aggregations:{contentHandler:{type:"sap.ui.mdc.base.info.ContentHandler",multiple:false}}}});a.prototype.setContentHandler=function(c){if(this.getContentHandler()){this.getContentHandler().detachExistenceOfContentChanged();}this.setAggregation("contentHandler",c);if(c){c.attachExistenceOfContentChanged(function(){this.fireDataUpdate();}.bind(this));}};a.prototype.isTriggerable=function(){var c=this.getContentHandler();if(c){return c.hasPotentialContent();}return Promise.resolve(false);};a.prototype.getTriggerHref=function(){var c=this.getContentHandler();if(!c){return Promise.resolve(null);}return c.getDirectLink().then(function(l){return l?l.getHref():null;});};a.prototype.getContentTitle=function(){var c=this.getContentHandler();return c?c.getContentTitle():undefined;};a.prototype.getContent=function(g){var c=this.getContentHandler();return c?c.getContent(g):Promise.resolve(null);};return a;},true);
