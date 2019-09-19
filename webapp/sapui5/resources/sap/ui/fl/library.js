/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/RegistrationDelegator","sap/ui/core/library","sap/m/library"],function(R){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.fl",version:"1.64.0",controls:["sap.ui.fl.variants.VariantManagement"],dependencies:["sap.ui.core","sap.m"],designtime:"sap/ui/fl/designtime/library.designtime",extensions:{"sap.ui.support":{diagnosticPlugins:["sap/ui/fl/support/Flexibility"],publicRules:true}}});sap.ui.fl.Scenario={AppVariant:"APP_VARIANT",VersionedAppVariant:"VERSIONED_APP_VARIANT",AdaptationProject:"ADAPTATION_PROJECT",FioriElementsFromScratch:"FE_FROM_SCRATCH",UiAdaptation:"UI_ADAPTATION"};R.registerAll();return sap.ui.fl;});
