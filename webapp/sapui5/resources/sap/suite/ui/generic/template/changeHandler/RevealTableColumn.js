/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/generic/RevealElement"],function(q,U,R){"use strict";var a={};var L="com.sap.vocabularies.UI.v1.LineItem";var D="com.sap.vocabularies.UI.v1.DataField";var c=function(C,s,p){var o=p.modifier.bySelector(s.revealedElementId,p.appComponent);var P=U.getPropertyOfColumn(o);var e=U.getODataEntityType(o);var b=e&&e.property;var i,d;for(i=0;i<b.length;i++){if(b[i].name===P){d=b[i];break;}}var l={Value:{Path:P},RecordType:D,EdmType:d&&d.type};return l;};a.applyChange=function(C,o,p){R.applyChange(C,o,p);};a.completeChangeContent=function(C,s,p){s.custom={};s.custom.annotation=L;s.custom.fnGetAnnotationIndex=U.getLineItemRecordIndex;s.custom.oRevealedAnnotationTerm=JSON.parse(JSON.stringify(c(C,s,p)));R.completeChangeContent(C,s,p);};return a;},true);
