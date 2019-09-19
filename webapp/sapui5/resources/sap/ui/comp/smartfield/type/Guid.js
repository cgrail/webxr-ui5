/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/odata/type/Guid"],function(G){"use strict";var a=G.extend("sap.ui.comp.smartfield.type.Guid",{constructor:function(f,c){G.apply(this,arguments);this.oFieldControl=null;}});a.prototype.parseValue=function(v,s){v=G.prototype.parseValue.apply(this,arguments);if(typeof this.oFieldControl==="function"){this.oFieldControl(v,s);}return v;};a.prototype.destroy=function(){G.prototype.destroy.apply(this,arguments);this.oFieldControl=null;};a.prototype.getName=function(){return"sap.ui.comp.smartfield.type.Guid";};return a;});
