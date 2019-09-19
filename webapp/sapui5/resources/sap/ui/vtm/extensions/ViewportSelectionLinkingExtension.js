/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","../Extension"],function(q,S,a){"use strict";var V=a.extend("sap.ui.vtm.extensions.ViewportSelectionLinkingExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IViewportSelectionLinkingExtension"]},constructor:function(i,s){a.apply(this,arguments);},initialize:function(){this.applyPanelHandler(function(p){var t=p.getTree();var v=p.getViewport();var h=false;t.attachSelectionChanged(function(e){if(!this.getEnabled()){return;}if(h){return;}h=true;var i=e.getParameter("addedItems");var b=e.getParameter("removedItems");var s=[];b.forEach(function(d){if(d.sceneNodeIds){Array.prototype.push.apply(s,sap.ui.vtm.TreeItemUtilities.getSceneNodeIds(d));}});v.setSelected(s,false,false);var c=[];i.forEach(function(d){if(d.sceneNodeIds){Array.prototype.push.apply(c,sap.ui.vtm.TreeItemUtilities.getSceneNodeIds(d));}});v.setSelected(c,true,false);h=false;}.bind(this));t.attachEvent("vtmInternalSetTreeSelectionComplete",function(e){h=false;});v.attachSelectionChanged(function(e){if(!this.getEnabled()){return;}var s=e.getParameter("selectedIds");var u=e.getParameter("userInteraction");if(u){var b=t.getItemsBySceneNodeId(s);t.setSelectedItems(b);}}.bind(this));}.bind(this));}});return V;});
