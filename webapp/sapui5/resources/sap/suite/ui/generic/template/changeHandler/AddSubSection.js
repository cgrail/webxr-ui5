/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/util/AnnotationChangeUtilsV2"],function(q,U,A){"use strict";var a={};a.applyChange=function(c,C,p){};a.completeChangeContent=function(c,s,p){var o=s.parentId||s.selector.id;var r=p.modifier.bySelector(o,p.appComponent);var m=U.getMetaModel(s,p);var e="";var E={};var b=[];var d=[];var f="";var t=U.getTemplatingInfo(r);if(t&&t.target&&t.annotation){e=t.target;E=m.getODataEntityType(e);f=t.annotation;b=E[f];}d=JSON.parse(JSON.stringify(b));var F=U.fnAddSubSection(r,b,s.index);var g={};g[F]={"Data":[{"Label":{"String":"New Field"},"Value":{"Path":""},"RecordType":"com.sap.vocabularies.UI.v1.DataField"}],"RecordType":"com.sap.vocabularies.UI.v1.FieldGroupType"};var C={customChanges:[]};var h=A.createCustomAnnotationTermChange(e,b,d,f);var i=A.createCustomAnnotationTermChange(e,g[F],{},F);C.customChanges.push(h);C.customChanges.push(i);q.extend(true,c.getContent(),C);};return a;},true);
