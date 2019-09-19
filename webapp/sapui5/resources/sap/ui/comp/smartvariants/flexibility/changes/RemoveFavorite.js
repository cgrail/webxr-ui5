/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/thirdparty/jquery",'sap/ui/fl/Utils','sap/ui/comp/library'],function(q,U,l){"use strict";var R={};R.applyChange=function(c,v,p){var C=c.getContent();if(q.isEmptyObject(C)){U.log.error("Change does not contain sufficient information to be applied");return false;}v.getItems().some(function(i){if(i.getKey()===C.key){i.setFavorite(C.visible);return true;}else if(i.getKey()===l.STANDARD_VARIANT_NAME){v.setStandardFavorite(C.visible);return true;}});return true;};R.completeChangeContent=function(c,s,p){if(q.isEmptyObject(s.content)){throw new Error("oSpecificChangeInfo.content should be filled");}if(!s.content.key){throw new Error("In oSpecificChangeInfo.content.key attribute is required");}if(s.content.visible!==false){throw new Error("In oSpecificChangeInfo.content.select attribute should be 'false'");}c.setContent(s.content);};return R;},true);
