/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/designtime/appVariant/ChangeModifier"],function(C){"use strict";return{prepareContent:function(f,n,N,s,S){S=S||sap.ui.fl.Scenario.VersionedAppVariant;return new Promise(function(r,a){if(!f||!n||!N||!s){a("Not all parameters were passed!");}r(f);}).then(C.modify.bind(C,N,s,S));}};},false);
