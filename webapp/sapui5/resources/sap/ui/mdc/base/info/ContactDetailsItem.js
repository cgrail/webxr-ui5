/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element'],function(E){"use strict";var C=E.extend("sap.ui.mdc.base.info.ContactDetailsItem",{metadata:{library:"sap.ui.mdc",properties:{sectionTitle:{type:"string",defaultValue:sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc").getText("info.POPOVER_CONTACT_SECTION_TITLE")},photo:{type:"string"},formattedName:{type:"string"},role:{type:"string"},title:{type:"string"},org:{type:"string"},parameters:{type:"object"}},defaultAggregation:"emails",aggregations:{emails:{type:"sap.ui.mdc.base.info.ContactDetailsEmailItem",multiple:true,singularName:"email"},phones:{type:"sap.ui.mdc.base.info.ContactDetailsPhoneItem",multiple:true,singularName:"phone"},addresses:{type:"sap.ui.mdc.base.info.ContactDetailsAddressItem",multiple:true,singularName:"address"}}}});return C;},true);
