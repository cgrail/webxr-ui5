/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";var a={};a.render=function(r,o){var t=o.getAggregation("_toolbarWrapper");var c=t&&o._bCustomToolbarRequirementsFullfiled;r.write('<div');r.writeControlData(o);if(o.getEditorType()=="TinyMCE4"){r.writeAttribute("data-sap-ui-preserve",o.getId());}r.addClass("sapUiRTE");if(o.getRequired()){r.addClass("sapUiRTEReq");}if(o.getUseLegacyTheme()){r.addClass("sapUiRTELegacyTheme");}if(c){r.addClass("sapUiRTEWithCustomToolbar");}r.writeClasses();r.addStyle("width",o.getWidth());r.addStyle("height",o.getHeight());r.writeStyles();if(o.getTooltip_AsString()){r.writeAttributeEscaped("title",o.getTooltip_AsString());}r.write('>');if(c){t.addStyleClass("sapUiRTECustomToolbar");r.renderControl(t);}var s="render"+o.getEditorType()+"Editor";if(this[s]&&typeof this[s]==="function"){this[s].call(this,r,o);}r.write('</div>');};return a;},true);
