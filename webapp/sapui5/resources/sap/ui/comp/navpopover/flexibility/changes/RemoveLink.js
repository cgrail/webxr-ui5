/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/thirdparty/jquery",'sap/ui/fl/Utils'],function(q,U){"use strict";var R={};R.applyChange=function(c,n,p){var C=c.getContent();if(q.isEmptyObject(C)){U.log.error("Change does not contain sufficient information to be applied");return false;}var a=n.getAvailableActions().filter(function(l){return l.getKey()===C.key;});if(a.length!==1){U.log.error("Item with key "+C.key+" not found in the availableAction aggregation");return false;}p.modifier.setProperty(a[0],"visibleChangedByUser",c.getLayer()==="USER");p.modifier.setProperty(a[0],"visible",C.visible);return true;};R.completeChangeContent=function(c,s,p){if(q.isEmptyObject(s.content)){throw new Error("oSpecificChangeInfo.content should be filled");}if(!s.content.key){throw new Error("In oSpecificChangeInfo.content.key attribute is required");}if(s.content.visible!==false){throw new Error("In oSpecificChangeInfo.content.select attribute should be 'false'");}c.setContent(s.content);};return R;},true);
