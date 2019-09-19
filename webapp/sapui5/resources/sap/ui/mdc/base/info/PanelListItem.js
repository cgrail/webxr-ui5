/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/XMLComposite'],function(X){"use strict";var P=X.extend("sap.ui.mdc.base.info.PanelListItem",{metadata:{library:"sap.ui.mdc",properties:{key:{type:"string"},text:{type:"string"},description:{type:"string"},href:{type:"string"},icon:{type:"string"},target:{type:"string",defaultValue:undefined},visible:{type:"boolean",defaultValue:true}},events:{pressLink:{allowPreventDefault:true,parameters:{target:{type:"string"}}}}}});P.prototype.onPress=function(e){if(!this.firePressLink({href:e.getSource().getHref(),target:e.getSource().getTarget()})){e.preventDefault();}};return P;},true);
