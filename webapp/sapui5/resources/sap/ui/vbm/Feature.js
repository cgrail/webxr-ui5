/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2012 SAP AG. All rights reserved
 */
sap.ui.define(['sap/ui/core/Element','./library'],function(E,l){"use strict";var F=E.extend("sap.ui.vbm.Feature",{metadata:{library:"sap.ui.vbm",properties:{color:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},featureId:{type:"string",group:"Misc",defaultValue:null}},events:{click:{},contextMenu:{parameters:{menu:{type:"sap.ui.unified.Menu"}}}}}});F.prototype.openDetailWindow=function(c,o,O){this.oParent.openDetailWindow(this,{caption:c,offsetX:o,offsetY:O});};F.prototype.openContextMenu=function(m){this.oParent.openContextMenu(this,m);};F.prototype.handleChangedData=function(e){};return F;});
