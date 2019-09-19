//@ui5-bundle sap/ui/fl/designtime/library-preload.designtime.js
/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/appVariant/AppVariantUtils',["sap/ui/fl/designtime/appVariant/ChangeModifier"],function(C){"use strict";return{prepareContent:function(f,n,N,s,S){S=S||sap.ui.fl.Scenario.VersionedAppVariant;return new Promise(function(r,a){if(!f||!n||!N||!s){a("Not all parameters were passed!");}r(f);}).then(C.modify.bind(C,N,s,S));}};},false);
sap.ui.predefine('sap/ui/fl/designtime/appVariant/ChangeModifier',["sap/ui/fl/Utils"],function(U){"use strict";var C={};
C.modify=function(n,N,s,f){return f.map(function(F){if(C._isTargetedUiChange(F.fileName)){F.content=C._modifyChangeFile(F.content,n,N,s);}return F;});};
var _=new RegExp("(apps/[^/]*/).*/","g");
C._isTargetedUiChange=function(f){var c="/changes/";var s=".change";if(f.startsWith(c)&&f.endsWith(s)){f=f.replace(new RegExp("^"+c),"");f=f.replace(new RegExp(s+"$"),"");return f.indexOf("/")===-1;}return false;};
C._modifyChangeFile=function(c,n,N,s){var o=JSON.parse(c);o.reference=n;o.validAppVersions=U.getValidAppVersions({appVersion:N,developerMode:true,scenario:s});o.support.generator="appVariant.UiChangeModifier";o.support.user="";o.projectId=n;o.packageName="";o.namespace=C._adjustFileName(o.namespace,n);return JSON.stringify(o);};
C._adjustFileName=function(n,N){return n.replace(_,"$1appVariants/"+N+"/changes/");};
return C;},false);
sap.ui.predefine('sap/ui/fl/designtime/variants/VariantManagement.designtime',["sap/ui/fl/Utils"],function(f){"use strict";var v="$FlexVariants";var s=function(V,d){var a=f.getAppComponentForControl(V),c=V.getId(),m=a.getModel(v),b=a.getLocalId(c)||c;if(!m){return;}m.setModelPropertiesForControl(b,d,V);m.checkUpdate(true);};return{annotations:{},properties:{showExecuteOnSelection:{ignore:false},showSetAsDefault:{ignore:false},manualVariantKey:{ignore:false},inErrorState:{ignore:false},editable:{ignore:false},modelName:{ignore:false},updateVariantInURL:{ignore:false}},variantRenameDomRef:function(V){return V.getTitle().getDomRef("inner");},customData:{},tool:{start:function(V){var d=true;s(V,d);},stop:function(V){var d=false;s(V,d);}}};},false);
/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.predefine('sap/ui/fl/designtime/library.designtime',[],function(){"use strict";return{};});
//# sourceMappingURL=library-preload.designtime.js.map