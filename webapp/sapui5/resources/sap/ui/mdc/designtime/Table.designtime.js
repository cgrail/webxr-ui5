/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/TableSettings"],function(T){"use strict";return{name:"{name}",description:"{description}",aggregations:{_content:{domRef:":sap-domref",ignore:false,propagateRelevantContainer:true,propagateMetadata:function(e){if(e.isA(["sap.m.Column","sap.ui.table.Column"])){return{actions:{remove:{changeType:"removeMDCColumn",changeOnRelevantContainer:true}}};}else if(e.isA(["sap.ui.mdc.Table","sap.ui.table.Table","sap.m.Table","sap.m.OverflowToolbar"])){return{actions:{settings:{"default":{handler:function(c,p){var m=c;while(m){if(m.isA("sap.ui.mdc.Table")){break;}m=m.getParent();}if(m){return T.showPanel(m,"Columns",p.eventItem,true);}},changeOnRelevantContainer:true}}}};}return{actions:null};}}}};},false);
