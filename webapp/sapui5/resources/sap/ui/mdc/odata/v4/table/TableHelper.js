/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var T={getLineItemCollection:function(c){var C,m,e;if(c){C=c.getObject("/collection");if(C){m=C.getModel();}if(m&&m.isA("sap.ui.model.odata.v4.ODataMetaModel")){e=C.getPath();return m.getMetaContext(e+"/@com.sap.vocabularies.UI.v1.LineItem");}}},getCollectionFields:function(e,m){var p=[],o,E;E=m.getObject(e+"/");for(var k in E){o=E[k];if(o&&o.$kind==="Property"){p.push({name:k,label:m.getObject(e+"/"+k+"@com.sap.vocabularies.Common.v1.Label"),type:o.$Type});}}return p;},getRestrictionsPath:function(c){if(c["@Org.OData.Capabilities.V1.DeleteRestrictions"]&&c["@Org.OData.Capabilities.V1.DeleteRestrictions"].Deletable.$Path){return', $select : \''+c["@Org.OData.Capabilities.V1.DeleteRestrictions"].Deletable.$Path+'\'';}else{return'';}}};return T;},true);
