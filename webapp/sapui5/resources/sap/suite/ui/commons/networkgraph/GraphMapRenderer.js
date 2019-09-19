/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Renderer'],function(){"use strict";return{_appendHeightAndWidth:function(n){return"style=\"height:"+n.getHeight()+";width:"+n.getWidth()+"\"";},render:function(r,n){r.write("<div class=\"sapSuiteUiCommonsNetworkGraphMap\"");r.write(this._appendHeightAndWidth(n));r.writeControlData(n);r.write(">");r.write("<div class=\"sapSuiteUiCommonsNetworkGraphMapTitle\">");r.write("<span class=\"sapSuiteUiCommonsNetworkGraphMapTitleText\">");r.writeEscaped(n.getTitle());r.write("</span>");r.write("</div>");r.write("<div class=\"sapSuiteUiCommonsNetworkGraphMapContent\"");if(n.getHeight()){r.write("style=\"height: 100%\"");}r.write(">");r.write("</div>");r.write("</div>");}};},true);
