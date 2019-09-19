/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['./ClusterBase','./library'],function(C,l){"use strict";var a=C.extend("sap.ui.vbm.ClusterTree",{metadata:{library:"sap.ui.vbm",properties:{animateClusterSplit:{type:"boolean",group:"Behaviour",defaultValue:true}},aggregations:{},events:{}}});a.prototype.getClusterDefinition=function(){var d=C.prototype.getClusterDefinition.apply(this,arguments);d.type="tree";d.animation=this.getAnimateClusterSplit().toString();return d;};return a;});
