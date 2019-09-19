/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/experimental/provider/adapter/base/ColumnWrapper","sap/ui/mdc/experimental/provider/adapter/odata/Annotations"],function(C,A){"use strict";var O=C.extend("sap.ui.mdc.experimental.provider.adapter.odata.v2.ODataColumnWrapper",{mColumns:{},constructor:function(f,l){this.setLineItems(l);C.prototype.constructor.apply(this,[f]);},switchField:function(f){C.prototype.switchField.apply(this,[f]);var d=this.mColumns[this.key]||f.getAnnotation(A.DATA_FIELD.DEFAULT);if(d){if(d[A.HIDDEN]){this.visible=false;}if(d.Label){this.label=d.Label.String;}this.iconURL=d.IconUrl?d.IconUrl:"";}},setLineItems:function(l){var n;if(!this.oLineItemAnnotation||(this.oLineItemAnnotation!==l)){this.oLineItemAnnotation=l;this.mColumns={};for(n in this.oLineItemAnnotation){var L=this.oLineItemAnnotation[n];if(L.RecordType!==A.DATA_FIELD.FIELD){continue;}this.mColumns[L.Value.Path]=L;}}}});return O;});
