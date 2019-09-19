/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/generic/MoveElements"],function(q,U,M){"use strict";var a={};var H="com.sap.vocabularies.UI.v1.HeaderFacets";a.applyChange=function(c,C,p){};a.completeChangeContent=function(c,s,p){s.custom={};s.custom.annotation=H;s.custom.fnGetAnnotationIndex=U.getHeaderFacetIndex;M.completeChangeContent(c,s,p);};return a;},true);
