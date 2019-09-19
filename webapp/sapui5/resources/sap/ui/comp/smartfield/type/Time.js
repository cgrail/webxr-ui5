/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/odata/type/Time"],function(T){"use strict";var a=T.extend("sap.ui.comp.smartfield.type.Time",{constructor:function(f,c){T.apply(this,arguments);this.oFieldControl=null;}});a.prototype.parseValue=function(v,s){var r=T.prototype.parseValue.apply(this,arguments);if(typeof this.oFieldControl==="function"){this.oFieldControl(v,s);}return r;};a.prototype.destroy=function(){T.prototype.destroy.apply(this,arguments);this.oFieldControl=null;};a.prototype.getName=function(){return"sap.ui.comp.smartfield.type.Time";};return a;});
