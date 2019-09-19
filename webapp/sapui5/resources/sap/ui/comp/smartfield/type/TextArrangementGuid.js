/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/comp/smartfield/type/TextArrangement","sap/ui/comp/smartfield/type/Guid","sap/ui/model/ValidateException","sap/base/assert"],function(T,G,V,a){"use strict";var b=T.extend("sap.ui.comp.smartfield.type.TextArrangementGuid");b.prototype.parseDescriptionOnly=function(v,s,c,f,S){var p=G.prototype.parseValue.call(this,v,s);if(i(p)){return new Promise(function(r,R){this.onBeforeValidateValue(p,{filterFields:this.getFilterFields(),success:function(d){if(d.length===1){this.sDescription=d[0][S.descriptionField];r([p,undefined]);return;}if(d.length===0){R(new V(this.getResourceBundleText("SMARTFIELD_NOT_FOUND")));return;}a(false,"Duplicate GUID. - "+this.getName());}.bind(this),error:function(){R(new V());}});}.bind(this));}else{v=v.trim();return T.prototype.parseDescriptionOnly.call(this,v,s,c,f,S);}};b.prototype.onBeforeValidateValue=function(v,s){if((this.oFormatOptions.textArrangement==="descriptionOnly")&&!i(v)){s.filterFields=["descriptionField"];}this.oSettings.onBeforeValidateValue(v,s);};b.prototype.getName=function(){return"sap.ui.comp.smartfield.type.TextArrangementGuid";};b.prototype.getPrimaryType=function(){return G;};function i(v){var r=/^[A-F0-9]{8}-([A-F0-9]{4}-){3}[A-F0-9]{12}$/i;return r.test(v);}return b;});
