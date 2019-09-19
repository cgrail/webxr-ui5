/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["sap/m/StandardListItemRenderer","sap/ui/core/Renderer"],function(B,R){"use strict";var L=R.extend(B);L.renderLIContent=function(r,c){var s=c.getColor();var t=c.getSemanticSpotType();var i=null;if(s){r.write("<span");r.addClass("sapUiVkLegendItemSquare");r.addStyle("background-color",s);r.writeStyles();r.writeClasses();r.write(">");r.write("</span>");}if(t){switch(t){case sap.ui.vbm.SemanticType.Error:i=sap.ui.resource("sap.ui.vbm","themes/base/img/Pin_Red.png");break;case sap.ui.vbm.SemanticType.Warning:i=sap.ui.resource("sap.ui.vbm","themes/base/img/Pin_Orange.png");break;case sap.ui.vbm.SemanticType.Success:i=sap.ui.resource("sap.ui.vbm","themes/base/img/Pin_Green.png");break;case sap.ui.vbm.SemanticType.Default:i=sap.ui.resource("sap.ui.vbm","themes/base/img/Pin_Blue.png");break;case sap.ui.vbm.SemanticType.Inactive:i=sap.ui.resource("sap.ui.vbm","themes/base/img/Pin_Grey.png");break;default:break;}if(i){c.addStyleClass("sapUiVkLegendItemSpotType");c.setIcon(i);}}B.renderLIContent(r,c);};return L;},true);
