/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/comp/smartfield/type/TextArrangement","sap/ui/comp/smartfield/type/String"],function(T,S){"use strict";var a=T.extend("sap.ui.comp.smartfield.type.TextArrangementString");a.prototype.onBeforeValidateValue=function(v,s){this.oSettings.onBeforeValidateValue(v,s);};a.prototype.getName=function(){return"sap.ui.comp.smartfield.type.TextArrangementString";};a.prototype.getPrimaryType=function(){return S;};return a;});
