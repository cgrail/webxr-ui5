/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/core/Control','./ContentPanel'],function(C,a){"use strict";var T=C.extend("sap.viz.ui5.controls.charttooltip.TooltipContainer",{metadata:{properties:{}},renderer:{render:function(r,c){var i=c.getId();r.write('<div');r.writeAttribute("id",i);r.addClass("viz-controls-chartTooltip");r.writeClasses();r.write('>');r.renderControl(c._oPanel);r.write('</div>');}}});T.prototype.init=function(){this._oPanel=new a();};T.prototype.setContent=function(d){this._oPanel.setContent(d);};T.prototype.exit=function(){if(this._oPanel){this._oPanel.destroy();this._oPanel=null;}};return T;});
