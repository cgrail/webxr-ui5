/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/provider/adapter/base/BaseAdapter","sap/ui/mdc/experimental/provider/adapter/odata/Annotations","sap/ui/mdc/experimental/provider/adapter/odata/_ODataAdapterUtils"],function(B,A,U){"use strict";var O=B.extend("sap.ui.mdc.experimental.provider.adapter.odata.v4.ODataBaseAdapter",{constructor:function(m,M,c){B.prototype.constructor.apply(this,arguments);}});O.annotations=A;O.utils=U;O.collectionToArray=function(c){var i,a=[];if(c&&c.length){for(i=0;i<c.length;i++){a.push(c[i].$PropertyPath);}}return a;};O.prototype.ready=function(){if(!this.oMetaModel.oMetadataPromise){this.oMetaModel.fetchEntityContainer();}return this.oMetaModel.oMetadataPromise;};O.prototype.afterMetaContextSwitch=function(){this.sVersion="4.0";U.buildSchemaCache(this);};O.prototype.getQualifiers=function(){return U.getQualifiers(this);};O.prototype.enabled=function(){return U.enabled(this);};O.prototype.tooltip=function(){return U.getAnnotation("@"+A.QUICKINFO,this);};O.prototype.label=function(){return U.getAnnotation("@"+A.LABEL,this);};O.prototype["//"]=function(){return this.schema;};O.prototype.name=function(){return U.getAnnotation("@sapui.name",this);};return O;});
