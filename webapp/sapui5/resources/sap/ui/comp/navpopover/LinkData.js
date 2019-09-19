/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/comp/library','sap/ui/core/Element'],function(l,E){"use strict";var L=E.extend("sap.ui.comp.navpopover.LinkData",{metadata:{library:"sap.ui.comp",properties:{text:{type:"string",defaultValue:null},href:{type:"string",defaultValue:null},target:{type:"string",defaultValue:null},description:{type:"string",defaultValue:undefined},visible:{type:"boolean",defaultValue:true},key:{type:"string",defaultValue:undefined},press:{type:"object",defaultValue:null},isSuperiorAction:{type:"boolean"},visibleChangedByUser:{type:"boolean"}}}});L.prototype.getJson=function(){return{key:this.getKey(),href:this.getHref(),text:this.getText(),target:this.getTarget(),description:this.getDescription(),visible:this.getVisible(),press:this.getPress(),isSuperiorAction:this.getIsSuperiorAction()};};L.convert2Json=function(a){return a.map(function(o){return o.getJson();});};return L;},true);
