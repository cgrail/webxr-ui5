/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/fl/changeHandler/ChangeHandlerMediator"],function(C){"use strict";return{name:"{name}",description:"{description}",aggregations:{_content:{domRef:":sap-domref",ignore:false,propagateRelevantContainer:true,propagateMetadata:function(e){if(e.isA("sap.ui.mdc.base.filterbar.FilterBar")){return{actions:{addFilter:{changeType:"addFilter",changeOnRelevantContainer:true},removeFilter:{changeType:"removeFilter",changeOnRelevantContainer:true},setFilterPosition:{changeType:"setFilterPosition",changeOnRelevantContainer:true},setFilterValue:{changeType:"setFilterValue",changeOnRelevantContainer:true},removeFilterValue:{changeType:"removeFilterValue",changeOnRelevantContainer:true,jsOnly:false}}};}else if(e.isA("sap.ui.mdc.base.FilterField")){return{actions:{settings:{handler:function(c,p){var m=p.contextElement.getParent().getParent();m.setMetadataDelegate("sap/ui/mdc/base/odata/v4/FilterBarHelper");return m.showFiltersDialog();},changeOnRelevantContainer:true}}};}return{actions:null};}}}};},false);
