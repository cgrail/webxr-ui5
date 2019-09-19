/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/format/NumberFormat","sap/ui/core/Core"],function(N,C){"use strict";var T={};T._oCurrencyFormatter=null;T.formatCurrency=function(v,c){return T._getCurrencyFormatter().format(v,c)||"";};T._getCurrencyFormatter=function(){if(!T._oCurrencyFormatter){T._oCurrencyFormatter=N.getCurrencyInstance({showMeasure:false},C.getConfiguration().getLocale());}return T._oCurrencyFormatter;};return T;},true);
