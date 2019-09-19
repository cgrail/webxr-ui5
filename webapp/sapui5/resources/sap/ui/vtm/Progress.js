/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/m/Text","sap/m/ProgressIndicator"],function(q,S,a,b){"use strict";var P=S.extend("sap.ui.vtm.Progress",{metadata:{aggregations:{progressText:{type:"sap.m.Title",multiple:false},progressBar:{type:"sap.m.ProgressIndicator",multiple:false}}},init:function(){var p=new sap.m.ProgressIndicator({width:"100%"});p.addStyleClass("sapUiVtmProgress_progressBar");this.setProgressBar(p);var c=new sap.m.Title({width:"100%",titleStyle:sap.ui.core.TitleLevel.H3,textAlign:sap.ui.core.TextAlign.Center});c.addStyleClass("sapUiVtmProgress_progressText");this.setProgressText(c);this.addStyleClass("sapUiVtmProgress");},renderer:function(r,c){r.write("<div");r.writeControlData(c);r.addStyle("height","inherit");r.writeStyles();r.writeClasses();r.write(">");r.renderControl(c.getProgressText());r.renderControl(c.getProgressBar());r.write("</div>");}});return P;});
