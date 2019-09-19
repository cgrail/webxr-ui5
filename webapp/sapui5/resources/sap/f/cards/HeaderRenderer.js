/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var H={},r=sap.ui.getCore().getLibraryResourceBundle("sap.f");H.render=function(R,c){R.write("<div");R.writeControlData(c);R.writeAttribute("tabindex","0");R.addClass("sapFCardHeader");R.writeAccessibilityState(c,{role:"group",labelledBy:{value:c._getHeaderAccessibility(),append:true},roledescription:{value:r.getText("ARIA_ROLEDESCRIPTION_CARD_HEADER"),append:true}});R.writeClasses();R.write(">");if(c.getIconSrc()||c.getIconInitials()){R.renderControl(c._getAvatar());}if(c.getTitle()){R.write("<div");R.addClass("sapFCardHeaderText");R.writeClasses();R.write(">");R.renderControl(c._getTitle());if(c.getSubtitle()){R.renderControl(c._getSubtitle());}R.write("</div>");}var s=c.getStatusText();if(s){R.write("<span");R.addClass("sapFCardStatus");R.writeClasses();R.write(">");R.writeEscaped(s);R.write("</span>");}R.write("</div>");};return H;},true);
