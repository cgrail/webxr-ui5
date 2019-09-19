/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/fl/changeHandler/ChangeHandlerMediator"],function(C){"use strict";var c=function(m,p){return m.createControl("sap.ui.comp.smartfield.SmartField",p.appComponent,p.view,p.fieldSelector,{value:"{"+p.bindingPath+"}"});};var f=function(m,p){var s=c.apply(null,arguments);var n=m.getId(s);var S=m.createControl("sap.ui.comp.smartfield.SmartLabel",p.appComponent,p.view,n+"-label",{labelFor:n});return{"label":S,"control":s};};C.addChangeHandlerSettings({"scenario":"addODataFieldWithLabel","oDataServiceVersion":"2.0"},{"createFunction":f});C.addChangeHandlerSettings({"scenario":"addODataFieldWithLabel","oDataServiceVersion":"1.0"},{"createFunction":f});C.addChangeHandlerSettings({"scenario":"addODataField","oDataServiceVersion":"2.0"},{"createFunction":c});C.addChangeHandlerSettings({"scenario":"addODataField","oDataServiceVersion":"1.0"},{"createFunction":c});return{};},true);
