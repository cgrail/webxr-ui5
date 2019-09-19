/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/odata/type/String"],function(S){"use strict";var a=S.extend("sap.ui.comp.smartfield.type.String",{constructor:function(f,c){S.apply(this,arguments);this.oFieldControl=null;}});a.prototype.parseValue=function(v,s){var r=S.prototype.parseValue.apply(this,arguments);if(typeof this.oFieldControl==="function"){this.oFieldControl(v,s);}return r;};a.prototype.getName=function(){return"sap.ui.comp.smartfield.type.String";};return a;});
