/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/ID','sap/base/Log'],function(I,L){"use strict";function v(i){if(I.isValid(i)){return i;}else{i=r(i);if(I.isValid(i)){return i;}else{L.error('Stable Id could not be generated due to insufficient information.');throw'Stable Id could not be generated due to insufficient information.';}}}function r(i){if(i.indexOf(" ")>=0){L.error("Spaces are not allowed in ID parts.");throw'Spaces are not allowed in ID parts.';}return i.replace(/^\/|^@|^#/,"").replace(/\/$|@$|#$/,"").replace(/\/|@|#/g,"::");}var o={'Facet':function(f){var F;if(f.$Type&&f.$Type==="com.sap.vocabularies.UI.v1.CollectionFacet"){if(f.ID){F=f.ID;}}else if(f.$Type&&f.$Type==="com.sap.vocabularies.UI.v1.ReferenceFacet"){if(f.ID&&f.ID.String){F=f.ID.String;}else{F=f.Target.$AnnotationPath;}}return F;}};var s={generate:function(S){var a='',e,p;for(var i=0;i<S.length;i++){a+=i!==0?'::':'';e=S[i];if(typeof e==='string'){e=v(e);if(e){a+=e;}}else if(typeof e==='object'){for(var k in e){p=o[k](e[k]);p=v(p);if(p){a+=p;}}}}return a;}};return s;});
