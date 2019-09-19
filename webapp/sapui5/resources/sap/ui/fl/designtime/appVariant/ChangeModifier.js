/*
 * ! OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils"],function(U){"use strict";var C={};C.modify=function(n,N,s,f){return f.map(function(F){if(C._isTargetedUiChange(F.fileName)){F.content=C._modifyChangeFile(F.content,n,N,s);}return F;});};var _=new RegExp("(apps/[^/]*/).*/","g");C._isTargetedUiChange=function(f){var c="/changes/";var s=".change";if(f.startsWith(c)&&f.endsWith(s)){f=f.replace(new RegExp("^"+c),"");f=f.replace(new RegExp(s+"$"),"");return f.indexOf("/")===-1;}return false;};C._modifyChangeFile=function(c,n,N,s){var o=JSON.parse(c);o.reference=n;o.validAppVersions=U.getValidAppVersions({appVersion:N,developerMode:true,scenario:s});o.support.generator="appVariant.UiChangeModifier";o.support.user="";o.projectId=n;o.packageName="";o.namespace=C._adjustFileName(o.namespace,n);return JSON.stringify(o);};C._adjustFileName=function(n,N){return n.replace(_,"$1appVariants/"+N+"/changes/");};return C;},false);
