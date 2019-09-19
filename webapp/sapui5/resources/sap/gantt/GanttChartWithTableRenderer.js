/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/theming/Parameters','sap/gantt/misc/Utility'],function(P,U){"use strict";var G={};G.render=function(r,g){r.write("<div");r.writeControlData(g);r.addClass("sapGanttChartWithTable");r.writeClasses();r.addStyle("width",g.getWidth());r.addStyle("height",g.getHeight());r.writeStyles();r.write(">");this._setTableColumnHeaderHeight(g);r.renderControl(g._oSplitter);r.write("</div>");};G._setTableColumnHeaderHeight=function(g){var h=g._oToolbar.getAllToolbarItems().length===0;if(h){var m=U.findSapUiSizeClass(g),H=jQuery.sap.endsWith(sap.ui.getCore().getConfiguration().getTheme(),"hcb"),i=0,p=H?4:2;if(m==="sapUiSizeCozy"){i=parseInt(P.get("_sap_gantt_Gantt_HeaderHeight"),10)-p;}else{i=parseInt(P.get("_sap_gantt_Gantt_CompactHeaderHeight"),10)-p;}g._oTT.setColumnHeaderHeight(i);}};return G;},true);
