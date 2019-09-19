/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Element","./ContentConnector","./Scene"],function(q,E,C,S){"use strict";var V=E.extend("sap.ui.vk.ViewStateManagerBase",{metadata:{"abstract":true,properties:{shouldTrackVisibilityChanges:{type:"boolean",defaultValue:false},recursiveSelection:{type:"boolean",defaultValue:false}},associations:{contentConnector:{type:"sap.ui.vk.ContentConnector"}},events:{visibilityChanged:{parameters:{visible:{type:"any[]"},hidden:{type:"any[]"}},enableEventBubbling:true},selectionChanged:{parameters:{selected:{type:"any[]"},unselected:{type:"any[]"}},enableEventBubbling:true},opacityChanged:{parameters:{changed:{type:"any[]"},opacity:{type:"float"}},enableEventBubbling:true},tintColorChanged:{parameters:{changed:{type:"any[]"},tintColor:{type:"sap.ui.core.CSSColor"},tintColorABGR:{type:"int"}},enableEventBubbling:true},nodeHierarchyReplaced:{parameters:{oldNodeHierarchy:{type:"sap.ui.vk.NodeHierarchy"},newNodeHierarchy:{type:"sap.ui.vk.NodeHierarchy"}}},highlightColorChanged:{parameters:{highlightColor:{type:"sap.ui.core.CSSColor"},highlightColorABGR:{type:"int"}},enableEventBubbling:true}}}});return V;});
