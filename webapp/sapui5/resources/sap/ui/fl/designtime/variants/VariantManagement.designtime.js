/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(f){"use strict";var v="$FlexVariants";var s=function(V,d){var a=f.getAppComponentForControl(V),c=V.getId(),m=a.getModel(v),b=a.getLocalId(c)||c;if(!m){return;}m.setModelPropertiesForControl(b,d,V);m.checkUpdate(true);};return{annotations:{},properties:{showExecuteOnSelection:{ignore:false},showSetAsDefault:{ignore:false},manualVariantKey:{ignore:false},inErrorState:{ignore:false},editable:{ignore:false},modelName:{ignore:false},updateVariantInURL:{ignore:false}},variantRenameDomRef:function(V){return V.getTitle().getDomRef("inner");},customData:{},tool:{start:function(V){var d=true;s(V,d);},stop:function(V){var d=false;s(V,d);}}};},false);
