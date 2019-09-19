/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var a=function(v,c,p,P){c.setRevertData(P.modifier.getProperty(p,"visible"));P.modifier.setProperty(p,"visible",v);};var r=function(v,c,p,P){P.modifier.setProperty(p,"visible",c.getRevertData());c.resetRevertData();};return{createChanges:function(d){return d.map(function(D){var c=sap.ui.getCore().byId(D.id);if(!c){throw new Error("Invalid 'id'. For the id "+D.id+" no existing control could be found");}return{selectorControl:c,changeSpecificData:{changeType:D.visible?"revealItem":"hideItem"}};});},revealItem:{layers:{USER:true},changeHandler:{applyChange:function(c,p,P){a(true,c,p,P);},revertChange:function(c,p,P){r(true,c,p,P);},completeChangeContent:function(c,s){}}},hideItem:{layers:{USER:true},changeHandler:{applyChange:function(c,p,P){a(false,c,p,P);},revertChange:function(c,p,P){r(false,c,p,P);},completeChangeContent:function(c,s){}}}};},true);
