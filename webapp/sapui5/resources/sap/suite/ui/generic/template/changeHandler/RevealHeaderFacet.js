/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/generic/RevealElement","sap/ui/fl/changeHandler/UnhideControl"],function(q,U,R,a){"use strict";var b={};var r="";var H="com.sap.vocabularies.UI.v1.HeaderFacets";var c=function(C,s,p){var e=p.modifier.bySelector(r,p.appComponent);var t=U.getTemplatingInfo(e);var h=t.annotationContext;return h;};b.applyChange=function(C,s,p){var e=p.modifier.bySelector(r,p.appComponent);a.applyChange(C,e,p);};b.completeChangeContent=function(C,s,p){r=s.revealedElementId;s.custom={};s.custom.annotation=H;s.custom.fnGetAnnotationIndex=U.getHeaderFacetIndex;s.custom.oRevealedAnnotationTerm=JSON.parse(JSON.stringify(c(C,s,p)));R.completeChangeContent(C,s,p);};return b;},true);
