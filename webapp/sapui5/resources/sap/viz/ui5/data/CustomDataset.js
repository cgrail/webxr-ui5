/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','./Dataset'],function(l,D){"use strict";var C=D.extend("sap.viz.ui5.data.CustomDataset",{metadata:{library:"sap.viz",properties:{data:{type:"object",group:"Misc"}}}});C.prototype.getRawDataset=function(){return this.getProperty('data');};C.prototype.isReady=function(){return true;};return C;});
