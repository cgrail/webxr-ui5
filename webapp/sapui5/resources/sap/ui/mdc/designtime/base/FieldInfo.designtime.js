/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";return{aggregations:{contentHandler:{ignore:true}},tool:{start:function(f){if(f.getContentHandler()){f.getContentHandler().setEnablePersonalization(false);}},stop:function(f){if(f.getContentHandler()){f.getContentHandler().setEnablePersonalization(true);}}}};},false);
