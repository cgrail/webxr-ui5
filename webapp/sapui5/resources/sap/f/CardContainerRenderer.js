/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={};C.render=function(r,c){r.write('<div');r.writeControlData(c);r.addClass("sapFCardContainer");r.writeClasses();if(c.getHeight()){r.addStyle("height",c.getHeight());}if(c.getWidth()){r.addStyle("width",c.getWidth());}r.writeStyles();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.write(">");c.getItems().forEach(function(i){r.write("<div>");r.renderControl(i);r.write("</div>");});r.write("</div>");};return C;},true);
