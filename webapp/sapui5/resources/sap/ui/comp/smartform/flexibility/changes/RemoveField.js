/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/fl/changeHandler/Base'],function(B){"use strict";var R={};R.applyChange=function(c,f,p){var m=p.modifier;var v=p.view;var g=m.getParent(f);if(g){var F=m.findIndexInParentAggregation(f);c.setRevertData({fieldIndex:F});m.removeAggregation(g,"groupElements",f,v);}return true;};R.completeChangeContent=function(c,s){var C=c.getDefinition();if(!C.content){C.content={};}};R.revertChange=function(c,f,p){var v=p.view;var m=p.modifier;var F=c.getRevertData().fieldIndex;var g=m.getParent(f);m.insertAggregation(g,"groupElements",f,F,v);c.resetRevertData();return true;};return R;},true);
