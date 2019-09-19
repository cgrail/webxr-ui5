/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/adapter/odata/ODataBaseAdapter","./ODataPropertyAdapter"],function(O,a){"use strict";var b=O.extend("sap.ui.mdc.experimental.adapter.odata.v4.ODataObjectAdapter",{constructor:function(m){O.prototype.constructor.apply(this,[m,{keys:function(){if(this.schema.$Key==1){return this.schema.$Key[0];}return this.schema.$Key;},properties:function(){var k,p,P,c={};var d={model:this.oModel};if(Array.isArray(this.schema)){for(var i=0;i<this.schema.length;i++){d.path=this.path+i;var o=new a(d);c[o.name]=o;}}else{for(k in this.schema){if(k[0]!=="$"){p=this.metaPath+k;P=this.oMetaModel.getProperty(p);if(P&&P.$kind){d.path=p;c[k]=new a(d);}}}}return c;},parent:function(){return this.parentPromise("sap/ui/mdc/experimental/adapter/odata/v4/ODataListAdapter",m);}}]);}});return b;});
