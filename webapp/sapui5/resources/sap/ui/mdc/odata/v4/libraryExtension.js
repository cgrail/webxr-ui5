/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/util/XMLPreprocessor','sap/ui/mdc/odata/v4/PhantomUtil',"sap/ui/mdc/odata/v4/ValueListHelper","sap/ui/mdc/odata/v4/field/FieldRuntime","sap/ui/mdc/odata/v4/table/TableRuntime"],function(X,P){"use strict";var n="sap.ui.mdc.odata.v4",c=['Table','Form','Field','FilterBar','FilterField','Chart','ValueHelp'];c.forEach(function(N){X.plugIn(P.resolve.bind(n+'.'+N),n,N);});});
