/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var C=E.extend("sap.gantt.config.ChartScheme",{metadata:{properties:{key:{type:"string",defaultValue:null},name:{type:"string",defaultValue:null},rowSpan:{type:"int",defaultValue:1},icon:{type:"sap.ui.core.URI",defaultValue:null},modeKey:{type:"string",defaultValue:sap.gantt.config.DEFAULT_MODE_KEY},haveBackground:{type:"boolean",defaultValue:false},backgroundClass:{type:"string"},shapeKeys:{type:"string[]",defaultValue:[]},rowIndexName:{type:"string",defaultValue:"rowIndex"}}}});return C;},true);
