/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/util/AnnotationChangeUtilsV2"],function(q,U,A){"use strict";var M={};var F="com.sap.vocabularies.UI.v1.Facets";var a="com.sap.vocabularies.UI.v1.FieldGroup";var I="com.sap.vocabularies.UI.v1.Identification";M.applyChange=function(c,C,p){};M.completeChangeContent=function(c,s,p){U.isRevert=!U.isRevert;if(!U.isRevert){return;}var m=s.movedElements[0].id;var g=p.modifier.bySelector(m,p.appComponent);var e=U.getODataEntitySet(U.getComponent(g)).entityType;var f=A.getExistingAnnotationsOfEntityType(g,F);var o=JSON.parse(JSON.stringify(f));var G=(m.split("--")[1]);G=G.substring(0,G.lastIndexOf("::"));if(G.indexOf(a)===0||G.indexOf(I)===0){G="@"+G.replace("::","#");}else{G=G.replace("::","/@").replace("::","#");}var n=s.movedElements[0].sourceIndex;var b=s.movedElements[0].targetIndex;var d=U.getSmartFormGroupInfo(G,f);if(d&&d.aForm){d.aForm.splice(b,0,d.aForm.splice(n,1)[0]);var t=A.createCustomAnnotationTermChange(e,f,o,F);var C=A.createCustomChanges(t);q.extend(true,c.getContent(),C);}};return M;},true);
