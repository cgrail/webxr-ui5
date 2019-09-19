/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./BaseShape'],function(B){"use strict";var T=function(d){if(!(this instanceof B)){throw new Error("TitlePropagator only supports subclasses of BaseShape");}if(d===undefined){d=true;}this.getShowTitle=function(){return this.getProperty("showTitle");};this.setShowTitle=function(s){return this.setProperty("showTitle",s);};this.getMetadata().addProperty("showTitle",{type:"boolean",group:"Appearance",defaultValue:!!d});this.getMetadata().addPublicMethods('getShowTitle');this.getMetadata().addPublicMethods('setShowTitle');this.getTitle=function(){return this.getProperty("title");};this.setTitle=function(t){return this.setProperty("title",t);};this.getMetadata().addProperty("title",{type:"string",group:"Appearance",defaultValue:null});this.getMetadata().addPublicMethods("getTitle");this.getMetadata().addPublicMethods('setTitle');};return T;},true);
