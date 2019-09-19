/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/adapter/odata/ODataBaseAdapter","./ODataObjectAdapter","./ODataPropertyAdapter"],function(O,a,b){"use strict";var c=O.extend("sap.ui.mdc.experimental.adapter.odata.v2.ODataListAdapter",{constructor:function(m){O.prototype.constructor.apply(this,[m,{object:function(){var o={model:this.oModel,path:this.path+"/",metaPath:this.entitySetPath+"/"};return new a(o);},name:function(){return this.entitySet.name;},fields:function(){var f=[];var p={model:this.oModel};if(Array.isArray(this.schema)){for(var i=0;i<this.schema.length;i++){p.path=this.path+"/"+i;f.push(new b(p));}}else{if(this.schema.property){for(i=0;i<this.schema.property.length;i++){p.path=this.path+"/"+this.schema.property[i].name;f.push(new b(p));}}if(this.schema.navigationProperty){var A;for(i=0;i<this.schema.navigationProperty.length;i++){A=this.oMetaModel.getODataAssociationEnd(this.schema,this.schema.navigationProperty[i].name);if(A.multiplicity=="1"||A.multiplicity=="0..1"){p.path=this.path+"/"+this.schema.navigationProperty[i].name;f.push(new c(p));}}}}return f;},collection:function(){var C="/";if(this.iSeparator>-1){C=this.path.substring(0,this.iSeparator);}else{C=this.path;}return C;}}]);},init:function(){O.prototype.init.apply(this,arguments);this.entitySet=this.calculateEntitySet();}});return c;});
