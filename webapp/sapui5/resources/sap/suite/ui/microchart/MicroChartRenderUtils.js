/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define([],function(){"use strict";var M={extendMicroChartRenderer:function(a){a._renderNoData=function(r){r.write("<div");r.addClass("sapSuiteUiMicroChartNoData");r.writeClasses();r.write(">");r.write("<div");r.addClass("sapSuiteUiMicroChartNoDataTextWrapper");r.writeClasses();r.write(">");var R=sap.ui.getCore().getLibraryResourceBundle("sap.suite.ui.microchart");var t=R.getText("NO_DATA");r.write("<span>");r.writeEscaped(t);r.write("</span>");r.write("</div>");r.write("</div>");};a._renderActiveProperties=function(r,c){var i=c.hasListeners("press");if(i){if(c._hasData()){r.addClass("sapSuiteUiMicroChartPointer");}r.writeAttribute("tabindex","0");}};}};return M;},true);
