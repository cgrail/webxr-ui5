/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/util/AnnotationChangeUtilsV2","sap/ui/fl/changeHandler/HideControl"],function(q,U,A,H){"use strict";var R={};R.applyChange=function(c,C,p){var e=p.modifier.byId(c.getContent().customChanges[0].removedElementId);H.applyChange(c,e,p);};R.completeChangeContent=function(c,s,p){var r=s.removedElement.id;var m=U.getMetaModel(s,p);var o=p.modifier.bySelector(r,p.appComponent);var a=s.custom.fnGetRelevantElement?s.custom.fnGetRelevantElement(o):o;var C={};var e="";var E={};var b=[];var d=[];var f="";var t=U.getTemplatingInfo(a);if(t&&t.target&&t.annotation){e=t.target;E=m.getODataEntityType(e);f=t.annotation;b=E[f];}else{e=U.getEntityType(a);E=m.getODataEntityType(e);f=s.custom.annotation;b=E[f];}d=b.slice();var i=s.custom.fnGetAnnotationIndex&&s.custom.fnGetAnnotationIndex(o);H.completeChangeContent(c,s,p);if(s.custom.fnPerformCustomRemove){s.custom.fnPerformCustomRemove(a,b);C=A.createCustomAnnotationTermChange(e,b,d,f);}else if(i>=0){b.splice(i,1);C=A.createCustomAnnotationTermChange(e,b,d,f);}C.removedElementId=r;var g=A.createCustomChanges(C);q.extend(true,c.getContent(),g);};return R;},true);
