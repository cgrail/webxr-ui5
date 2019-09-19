/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/fl/changeHandler/Base'],function(B){"use strict";var R={};R.applyChange=function(c,g,p){var m=p.modifier;var v=p.view;var f=m.getParent(g);var G=m.findIndexInParentAggregation(g);var a;if(m.getControlType(f)==="sap.ui.layout.form.Form"){a="formContainers";m.removeAggregation(f,"formContainers",g,v);}else{a="groups";m.removeAggregation(f,"groups",g,v);}m.insertAggregation(f,"dependents",g,0,v);c.setRevertData({groupIndex:G,aggregation:a});return true;};R.completeChangeContent=function(c,s){var C=c.getDefinition();if(!C.content){C.content={};}};R.revertChange=function(c,g,p){var v=p.view;var m=p.modifier;var r=c.getRevertData();var f=m.getParent(g);m.removeAggregation(f,"dependents",g);m.insertAggregation(f,r.aggregation,g,r.groupIndex,v);c.resetRevertData();return true;};return R;},true);
