/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global"],function(q){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.vk.tools",dependencies:["sap.ui.core"],types:["sap.ui.vk.tools.HitTestIdMode","sap.ui.vk.tools.HitTestClickType","sap.ui.vk.tools.CoordinateSystem","sap.ui.vk.tools.PredefinedView"],interfaces:[],controls:["sap.ui.vk.tools.MoveTool","sap.ui.vk.tools.RotateTool","sap.ui.vk.tools.ScaleTool","sap.ui.vk.tools.TooltipTool","sap.ui.vk.tools.SceneOrientationTool","sap.ui.vk.tools.RotateOrbitTool","sap.ui.vk.tools.RotateOrbitToolGizmo","sap.ui.vk.tools.RotateTurntableTool","sap.ui.vk.tools.RotateTurntableToolGizmo","sap.ui.vk.tools.HitTestTool","sap.ui.vk.tools.RectSelectTool","sap.ui.vk.tools.Tool"],elements:[],noLibraryCSS:true,version:"1.64.0"});sap.ui.vk.tools.HitTestIdMode={ThreeJS:"ThreeJS",VEsID:"VEsID",Callback:"Callback"};sap.ui.vk.tools.CoordinateSystem={Local:"Local",World:"World",Screen:"Screen"};sap.ui.vk.tools.PredefinedView={Initial:"Initial",Front:"Front",Back:"Back",Left:"Left",Right:"Right",Top:"Top",Bottom:"Bottom"};sap.ui.vk.tools.HitTestClickType={Single:"Single",Double:"Double",Context:"Context"};return sap.ui.vk.tools;});
