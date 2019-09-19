/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var V={};V.render=function(r,c){r.write("<DIV");r.writeControlData(c);r.addClass("sapVizContainer");r.writeClasses();if(c.getWidth()){r.addStyle("width",c.getWidth());}else{r.addStyle("width","100%");}if(c.getHeight()){r.addStyle("height",c.getHeight());}else{r.addStyle("height","100%");}r.writeStyles();r.write(">");r.write("</DIV>");};return V;},true);
