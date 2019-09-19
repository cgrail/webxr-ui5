/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","../Extension"],function(q,S,a){"use strict";var V=a.extend("sap.ui.vtm.extensions.VisibilityIconClickExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IVisibilityIconClickExtension","sap.ui.vtm.interfaces.IVisibilityHeaderIconClickExtension"]},constructor:function(i,s){a.apply(this,arguments);},initialize:function(){this.applyPanelHandler(function(p){var t=p.getTree();var v=p.getViewport();t.attachVisibilityIconClicked(function(e){if(!this.getEnabled()){return;}var i=e.getParameter("item");var b=e.getParameter("visibility");var n=!b;var c=e.getParameter("control");c.setVisibility(n);this._onTreeItemVisibilityClicked(t,v,i,n);}.bind(this));t.attachVisibilityHeaderIconClicked(function(e){if(!this.getEnabled()){return;}var b=e.getParameter("visibility");var n=!b;var c=e.getParameter("control");c.setVisibility(n);t.setVisibility(t.getRootItems(),n,true);}.bind(this));}.bind(this));},_onTreeItemVisibilityClicked:function(t,v,i,b){var s=t.getSelectedItems();var c=(s&&s.indexOf(i)>=0);if(!c){s=[i];}t.setVisibility(s,b,true);}});return V;});
