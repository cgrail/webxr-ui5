/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var B={};B.render=function(r,c){var i=!c.getDataset()||!c.getDataset().getVIZDataset(),b=sap.ui.getCore().getLibraryResourceBundle("sap.viz.ui5.messages");r.write("<DIV");r.writeControlData(c);if(c.getTooltip_AsString()){r.writeAttributeEscaped("title",c.getTooltip_AsString());}r.addClass("sapVizChart");if(i){r.addClass("sapVizNoData");}r.writeClasses();r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.write(">");if(!sap.viz.__svg_support){r.write('<DIV class="sapVizNoDataDefault">');r.writeEscaped(b.getText("NO_SVG_SUPPORT"));r.write('</DIV>');}else if(i){var n=c.getNoData();if(n){r.renderControl(n);}else{r.write('<DIV class="sapVizNoDataDefault">');r.writeEscaped(b.getText("NO_DATA"));r.write('</DIV>');}}r.write("</DIV>");};return B;},true);
