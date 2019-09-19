/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/library'],function(q,l){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.export",dependencies:["sap.ui.core"],types:["sap.ui.export.EdmType"],interfaces:[],controls:[],elements:["sap.ui.export.Spreadsheet","sap.ui.export.SpreadsheetExport"],version:"1.64.0"});sap.ui.export.EdmType={BigNumber:"BigNumber",Boolean:"Boolean",Currency:"Currency",Date:"Date",DateTime:"DateTime",Enumeration:"Enumeration",Number:"Number",String:"String",Time:"Time"};q.sap.registerModuleShims({'sap/ui/export/js/XLSXBuilder':{amd:true,exports:'XLSXBuilder'},'sap/ui/export/js/XLSXExportUtils':{amd:true,exports:'XLSXExportUtils'}});return sap.ui.export;});
