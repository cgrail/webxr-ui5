/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","../Extension"],function(q,S,a){"use strict";var V=a.extend("sap.ui.vtm.extensions.ViewLinkingExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IViewLinkingExtension"]},constructor:function(i,s){a.apply(this,arguments);},initialize:function(){this._skipCount=new Map();this.applyPanelHandler(function(p){var v=p.getViewport();v.attachEvent("frameRenderingFinished",function(e){if(!this.getEnabled()){return;}var b=this._getPrimaryPanel();if(e.getSource()!=b.getViewport()){return;}this._updateViews(p);}.bind(this));}.bind(this));this.attachEnabledChanged(function(e){if(this.getEnabled()){var p=this._getPrimaryPanel();if(p){this._updateViews(p);}}}.bind(this));},_getPrimaryPanel:function(){var p=this._vtm.getPanels();if(!p||!p.length){return null;}return this._vtm.getActivePanel()||p[0];},_updateViews:function(s){var b=s.getViewport();if(!b.getInitialized()){return;}var c=b.getCameraInfo();var p=this._vtm.getPanels();p.forEach(function(t){if(t!==s){var d=t.getViewport();if(d.getInitialized()){d.setCameraInfo(c);}}});}});return V;});
