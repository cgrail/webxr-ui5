/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Renderer','sap/m/LinkRenderer',"sap/base/security/encodeXML"],function(R,L,e){"use strict";var S=R.extend(L);S.render=function(r,c){var b=true;if(c.getIgnoreLinkRendering()){var o=c._getInnerControl();if(o){r.write("<div");r.writeControlData(c);r.writeClasses();r.write(">");r.renderControl(o);r.write("</div>");b=false;}}if(b){L.render.apply(this,arguments);}};S.writeText=function(r,c){if(!c.getUom()){r.writeEscaped(c.getText());return;}r.write("<span>"+e(c.getText())+"</span><span style='display:inline-block;min-width:2.5em;width:3.0em;text-align:start'>"+e(c.getUom())+"</span>");};return S;},true);
