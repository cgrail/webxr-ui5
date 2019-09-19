/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={},r=sap.ui.getCore().getLibraryResourceBundle("sap.f");C.render=function(R,c){var h=c.getCardHeader();R.write("<div");R.writeElementData(c);R.addClass("sapFCard");R.writeClasses();R.addStyle("width",c.getWidth());R.addStyle("height",c.getHeight());R.writeAccessibilityState(c,{role:"region",roledescription:{value:r.getText("ARIA_ROLEDESCRIPTION_CARD"),append:true}});if(h){var t=h._getTitle();if(t){R.writeAccessibilityState(c,{labelledBy:{value:t.getId(),append:true}});}}R.writeStyles();R.write(">");R.renderControl(h);C.renderContentSection(R,c);R.write("</div>");};C.renderContentSection=function(R,c){var o=c.getCardContent();if(o){R.write("<div");R.addClass("sapFCardContent");R.writeClasses();R.writeAccessibilityState(c,{role:"group",label:{value:r.getText("ARIA_LABEL_CARD_CONTENT"),append:true}});R.write(">");R.renderControl(o);R.write("</div>");}};return C;});
