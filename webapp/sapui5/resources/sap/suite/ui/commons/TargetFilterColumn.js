/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library','sap/ui/core/Element','sap/ui/model/type/String','sap/ui/model/SimpleType',"sap/base/Log"],function(l,E,S,a,L){"use strict";var T=E.extend("sap.suite.ui.commons.TargetFilterColumn",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{path:{type:"string",group:"Misc",defaultValue:null},title:{type:"string",group:"Misc",defaultValue:null},length:{type:"int",group:"Misc",defaultValue:10},type:{type:"any",group:"Misc",defaultValue:null}}}});T.prototype.init=function(){this.setType(new S());return this;};T.prototype.setType=function(t,s){if(!(t instanceof a)){L.error(t+" is not instance of sap.ui.model.SimpleType",this);}this.setProperty("type",t,s);return this;};return T;});
