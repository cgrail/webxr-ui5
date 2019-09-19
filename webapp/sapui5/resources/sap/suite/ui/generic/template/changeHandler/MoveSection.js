/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/util/AnnotationChangeUtilsV2","sap/uxap/changeHandler/MoveObjectPageSection","sap/suite/ui/generic/template/changeHandler/generic/MoveElements"],function(q,U,A,M,a){"use strict";var b={};var F="com.sap.vocabularies.UI.v1.Facets";b.applyChange=function(c,C,p){};b.completeChangeContent=function(c,s,p){s.custom={};s.custom.annotation=F;s.custom.fnGetAnnotationIndex=U.getIndexFromInstanceMetadataPath;s.custom.MoveConcreteElement=M;a.completeChangeContent(c,s,p);};return b;},true);
