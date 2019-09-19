/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/suite/ui/generic/template/changeHandler/util/ChangeHandlerUtils","sap/suite/ui/generic/template/changeHandler/util/AnnotationChangeUtilsV2","sap/ui/fl/changeHandler/UnhideControl"],function(q,U,A,a){"use strict";var R={};var S="com.sap.vocabularies.UI.v1.SelectionFields";R.applyChange=function(c,C,p){var e=p.modifier.byId(c.getContent().customChanges[0].revealedElementId);a.applyChange(c,e,p);};R.completeChangeContent=function(c,s,p){var e=s.revealedElementId;var m=U.getMetaModel(s,p);var v=p.modifier.bySelector(e,p.appComponent);var V=v.getParent().getAggregation("content");var E=v.getParent().getParent().getEntityType();var o=m.getODataEntityType(E);var b=o[S];var d=b.slice();var I=-1;V.some(function(j,i){if(j.getId()&&j.getId()===e){I=i;return true;}});var f=-1;var t=U.getTemplatingInfo(U.getSmartFilterBarControlConfiguration(v));if(t.annotation===S){if(I+1<V.length){I++;f=U.getRecordIndexForSelectionField(V[I]);}else{f=b.length;}}var C={};if(t.annotation===S&&f<0){f=0;}if(f>=0){var g={PropertyPath:t.value};b.splice(f,0,g);C=A.createCustomAnnotationTermChange(E,b,d,S);}a.completeChangeContent(c,s,p);C.revealedElementId=e;var h=A.createCustomChanges(C);q.extend(true,c.getContent(),h);U.isReveal=true;};return R;},true);
