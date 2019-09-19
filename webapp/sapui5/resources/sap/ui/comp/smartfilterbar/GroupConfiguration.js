/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/comp/library','sap/ui/core/Element'],function(l,E){"use strict";var G=E.extend("sap.ui.comp.smartfilterbar.GroupConfiguration",{metadata:{library:"sap.ui.comp",properties:{key:{type:"string",group:"Misc",defaultValue:null},index:{type:"any",group:"Misc",defaultValue:undefined},label:{type:"any",group:"Misc",defaultValue:undefined}},events:{change:{parameters:{propertyName:{type:"string"}}}}}});G.prototype.setLabel=function(L){this.setProperty("label",L);this.fireChange({propertyName:"label"});return this;};return G;},true);
