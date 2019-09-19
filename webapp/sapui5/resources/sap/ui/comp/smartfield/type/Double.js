/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/odata/type/Double"],function(D){"use strict";var a=D.extend("sap.ui.comp.smartfield.type.Double",{constructor:function(f,c){D.apply(this,arguments);this.oFieldControl=null;}});a.prototype.parseValue=function(v,s){v=D.prototype.parseValue.apply(this,arguments);if(typeof this.oFieldControl==="function"){this.oFieldControl(v,s);}return v;};a.prototype.destroy=function(){D.prototype.destroy.apply(this,arguments);this.oFieldControl=null;};a.prototype.getName=function(){return"sap.ui.comp.smartfield.type.Double";};return a;});
