/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../Extension"],function(q,S){"use strict";var I=S.extend("sap.ui.vtm.extensions.InitialViewExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IInitialViewExtension"],properties:{predefinedView:{type:"sap.ui.vtm.PredefinedView"}}},constructor:function(i,s){S.apply(this,arguments);},initialize:function(v){var i=false;v.getScene().attachLoadCompleted(function(e){var p=v.getPanels();var l=e.getParameter("succeeded");if(!this.getEnabled()||!l||i||!p.length){return;}i=true;var a=v.getExtensionByInterface("sap.ui.vtm.interfaces.IViewLinkingExtension");var b=a&&a.getEnabled();var c=this.getPredefinedView();var s=function(d){var f=d.getViewport();if(c){f.setPredefinedView(c);}else{f.zoomToAll(0);}};if(b){var d=v.getActivePanel()||p[0];s(d);}else{p.forEach(s);}}.bind(this));}});return I;});
