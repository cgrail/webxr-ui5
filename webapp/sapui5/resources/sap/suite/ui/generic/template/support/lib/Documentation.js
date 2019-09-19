/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/m/library"],function(q,l){"use strict";var E="https://ui5.sap.com/";var a="03265b0408e2432c9571d6b3feb6b1fd";function g(){var u=sap.ui.getVersionInfo().version;if(u.indexOf("-SNAPSHOT")!==-1){return E+"#/topic/"+a;}else{return E+u+"/#/topic/"+a;}}function o(){l.URLHelper.redirect(g(),true);}return{getDocuURL:g,openDocumentation:o};});
