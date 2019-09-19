/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./library","sap/ui/core/Control","sap/m/Dialog","./Progress"],function(q,S,a,b,c){"use strict";var P=a.extend("sap.ui.vtm.ProgressDialog",{metadata:{properties:{progressText:{type:"string"},percentComplete:{type:"int",defaultValue:0},progressBarVisible:{type:"boolean",defaultValue:"true"}}},init:function(){this._oProgress=new sap.ui.vtm.Progress();this._oDialog=new sap.m.Dialog(this.getId()+'-Dialog',{showHeader:false,content:[this._oProgress],verticalScrolling:false,horizontalScrolling:false});},renderer:function(r,C){},open:function(){return this._oDialog.open();},isOpen:function(){return this._oDialog.isOpen();},close:function(){return this._oDialog.close();},setPercentComplete:function(p){this.setProperty("percentComplete",p);this._oProgress.getProgressBar().setPercentValue(p);sap.ui.getCore().applyChanges();},setProgressText:function(p){this.setProperty("progressText",p);this._oProgress.getProgressText().setText(p);sap.ui.getCore().applyChanges();},setProgressBarVisible:function(p){this.setProperty("progressBarVisible",p);this._oProgress.getProgressBar().setVisible(p);}});return P;});
