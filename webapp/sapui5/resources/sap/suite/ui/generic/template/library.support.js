/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
/**
 * Adds support rules to the core - right now commented out, to activate it you need to remove the underscore
 */
sap.ui.define([	"jquery.sap.global",
				"./support/SupportAssistant/Config.support",
				"./support/SupportAssistant/Runtime.support"],
	function(jQuery, ConfigSupport, RuntimeSupport) {
	"use strict";


	return {

		name: "sap.suite.ui.generic.template",
		niceName: "Fiori Element Library",
		ruleset: [
			ConfigSupport,
			RuntimeSupport
		]
	};

}, true);
