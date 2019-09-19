/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['./ClusterBase','./library'],function(C,l){"use strict";var a=C.extend("sap.ui.vbm.ClusterDistance",{metadata:{library:"sap.ui.vbm",properties:{distance:{type:"int",group:"Behaviour",defaultValue:"128"}},aggregations:{},events:{}}});a.prototype.getClusterDefinition=function(){var d=C.prototype.getClusterDefinition.apply(this,arguments);d.type="distance";d.distance=this.getDistance().toString();return d;};return a;});
