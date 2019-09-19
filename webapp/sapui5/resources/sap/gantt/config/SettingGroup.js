/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["./ToolbarGroup","./SettingItem"],function(T,S){"use strict";var a=T.extend("sap.gantt.config.SettingGroup",{library:"sap.gantt",metadata:{properties:{items:{type:"object[]",defaultValue:sap.gantt.config.DEFAULT_TOOLBAR_SETTING_ITEMS}}}});return a;},true);
