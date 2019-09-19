/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/generic/RemoveElement"],function(q,U,R){"use strict";var a={};a.applyChange=function(c,C,p){R.applyChange(c,C,p);};a.completeChangeContent=function(c,s,p){s.custom={};s.custom.fnGetRelevantElement=U.getSmartFilterBarControlConfiguration;s.custom.fnGetAnnotationIndex=U.getRecordIndexForSelectionField;R.completeChangeContent(c,s,p);};return a;},true);
