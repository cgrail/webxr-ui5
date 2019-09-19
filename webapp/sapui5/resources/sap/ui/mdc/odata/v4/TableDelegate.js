/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/mdc/TableDelegate"],function(T){"use strict";var O=Object.assign({},T);O.fetchProperties=function(t){var p=[],P,o,e,E,m,M,a;E=t._oBindingInfo.path;m=t.getModel(t._oBindingInfo.model);M=m.getMetaModel();e=M.getObject(E+"/");var b=M.getObject(E+"@");var s=b["@Org.OData.Capabilities.V1.SortRestrictions"]||{};var n=(s["NonSortableProperties"]||[]).map(function(c){return c["$PropertyPath"];});for(var k in e){o=e[k];if(o&&o.$kind==="Property"){a=M.getObject(E+"/"+k+"@");P={name:k,label:a["@com.sap.vocabularies.Common.v1.Label"],description:a["@com.sap.vocabularies.Common.v1.Text"]&&a["@com.sap.vocabularies.Common.v1.Text"].$Path,maxLength:o.$MaxLength,precision:o.$Precision,scale:o.$Scale,type:o.$Type,sortable:n.indexOf(k)==-1,filterable:true};p.push(P);}}return p;};return O;},false);
