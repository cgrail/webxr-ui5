/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/comp/library','sap/ui/comp/variants/VariantItem','sap/ui/comp/state/UIState','sap/ui/core/Element'],function(l,V,U,E,A,C){"use strict";var S=E.extend("sap.ui.comp.smartvariants.SmartVariantManagementAdapter",{metadata:{library:"sap.ui.comp",properties:{selectionPresentationVariants:{type:"object",group:"Misc",defaultValue:false}}}});S.prototype.getUiState=function(k){var c,s=null,K=k.substring(1);this.getSelectionPresentationVariants().some(function(o){if(o.qualifier===K){s=o;}return s!==null;});if(s){if(s.uiStateContent){c=s.uiStateContent;}else{c=U.createFromSelectionAndPresentationVariantAnnotation(s.text,s.selectionVariant.annotation,s.presentationVariant.annotation);s.uiStateContent=c;}}return c;};S.prototype.createSelectionPresentationVariants=function(v){var s,o,k="#",a=[];if(!this.getSelectionPresentationVariants()){return;}s=this.getSelectionPresentationVariants();if(s){s.forEach(function(b){var c=k+b.qualifier;if(b.qualifier){o=new V({key:c,text:b.text,global:true,executeOnSelection:false,lifecycleTransportId:"",lifecyclePackage:"",namespace:"",readOnly:true,labelReadOnly:true,author:""});v.insertVariantItem(o,0);a.push(c);}});v.applyDefaultFavorites(a,true);}};S.prototype.destroy=function(){E.prototype.destroy.apply(this,arguments);};return S;},true);
