/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var C={};C.render=function(r,c){r.write("<div");r.writeControlData(c);r.addClass("sapMTBSpacer");var w=c.getWidth();if(w){r.addStyle("width",w);}r.writeStyles();r.writeClasses();r.write("></div>");};return C;},true);
