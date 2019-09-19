/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/comp/util/FormatUtil','sap/ui/base/ManagedObject','sap/m/Token'],function(F,M,T){"use strict";var I=function(){this.items={};};I.prototype.add=function(k,o){this.items[k]=o;};I.prototype.remove=function(k){delete this.items[k];};I.prototype.removeAll=function(){this.items={};};I.prototype.getItem=function(k){return this.items[k];};I.prototype.getItems=function(){var k=[];for(var i in this.items){k.push(i);}return k;};I.prototype.getSelectedItemsTokenArray=function(k,d,D){var t=[];for(var i in this.items){var o=this.items[i];var s,a;if(typeof o==="string"){a=i;s=o;}else{a=o[k];s=o[d];if(s===undefined){s=this.items[i];}else{if(!D){D="descriptionAndId";}s=F.getFormattedExpressionFromDisplayBehaviour(D,a,s);}}var b=new T({key:M.escapeSettingsValue(a)});b.setText(s);b.setTooltip(typeof s==="string"?s:"");if(typeof o!=="string"){b.data("row",o);b.data("longKey",i);}t.push(b);}return t;};I.prototype.getModelData=function(){var m=[];for(var i in this.items){var a=this.items[i];if(typeof a==="string"){a={missing:i};}m.push(a);}return m;};return I;},true);
