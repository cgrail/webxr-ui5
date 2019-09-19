/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var P=E.extend("sap.ui.mdc.base.info.PanelItem",{metadata:{library:"sap.ui.mdc",designtime:"sap/ui/mdc/designtime/base/info/PanelItem.designtime",properties:{text:{type:"string"},description:{type:"string"},href:{type:"string"},target:{type:"string",defaultValue:undefined},icon:{type:"string"},isMain:{type:"boolean",defaultValue:false},visible:{type:"boolean",defaultValue:true}}}});P.prototype.getJson=function(){return{id:this.getId(),text:this.getText(),description:this.getDescription(),href:this.getHref(),icon:this.getIcon(),target:this.getTarget(),isMain:this.getIsMain(),visible:this.getVisible()};};return P;},true);
