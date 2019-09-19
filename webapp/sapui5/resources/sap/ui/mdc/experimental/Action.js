/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/m/Button','sap/m/library'],function(B,l){"use strict";var a=l.ButtonType;var B=B.extend("sap.ui.mdc.experimental.Action",{metadata:{properties:{actionName:"string",emphasized:'boolean',mode:'string',multiplicityFrom:{type:"int"},multiplicityTo:{type:"int"}},events:{"callAction":{}}},onBeforeRendering:function(){if(this.getEmphasized()){this.setType(a.Emphasized);}},init:function(){this.attachPress(this.handleActionButtonPress,this);},handleActionButtonPress:function(e){this.fireCallAction({actionName:this.getActionName(),actionLabel:this.getText(),model:this.getModel()});},renderer:{}});return B;},true);
