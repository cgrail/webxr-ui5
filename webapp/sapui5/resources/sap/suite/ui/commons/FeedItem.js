/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library','sap/ui/core/Element',"sap/base/security/URLWhitelist","sap/base/Log"],function(l,E,U,L){"use strict";var F=E.extend("sap.suite.ui.commons.FeedItem",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{title:{type:"string",group:"Misc",defaultValue:null},image:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},link:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},source:{type:"string",group:"Misc",defaultValue:null},publicationDate:{type:"object",group:"Misc",defaultValue:null}}}});F.prototype.setImage=function(i){if(i){var v=U.validate(i);if(v){this.setProperty("image",i);}else{L.error("Invalid Url:'"+i+"'. Property 'image' of FeedItem not set");}}return this;};F.prototype.setLink=function(s){if(s){var v=U.validate(s);if(v){this.setProperty("link",s);}else{L.error("Invalid Url:'"+s+"'. Property 'link' of FeedItem not set");}}return this;};return F;});
