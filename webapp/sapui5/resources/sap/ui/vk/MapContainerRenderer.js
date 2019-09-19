/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["./ContainerBaseRenderer","sap/ui/core/Renderer","sap/ui/Device"],function(B,R,D){"use strict";var M=R.extend(B);M.render=function(r,c){c.addStyleClass("sapUiVkMapContainer");B.render.apply(this,arguments);};M.writeToolbarArea=function(r,c){r.write("<div");r.addClass("sapUiVkMapContainerOverlay");r.writeClasses();r.write(">");if(c.getShowNavbar()){r.write("<div");r.addClass("sapUiVkMapContainerNavbarArea");r.writeClasses();r.write(">");if(c.getShowMapLayer()&&c._shouldRenderMapLayerSwitch){r.renderControl(c._currentText);r.renderControl(c._selectionMap);}r.write("<div");r.addClass("sapUiVkMapContainerNavbarContainer");r.writeClasses();r.write(">");r.renderControl(c._oNavbar);r.write("</div>");r.write("</div>");}if(!D.system.phone&&c._shouldRenderListPanel){c._oScrollCont.addStyleClass("sapUiVkMapContainerListPanelArea");r.renderControl(c._oScrollCont);}B.writeToolbarArea(r,c);r.write("</div>");if(D.system.phone){r.write("<div id="+c.getId()+"-LPW");r.addClass("sapUiVkMapContainerLPW");r.writeClasses();r.write(">");r.renderControl(c._oMenuCloseButton);c._oScrollCont.addStyleClass("sapUiVkMapContainerListPanelArea");r.renderControl(c._oScrollCont);r.write("</div>");}};return M;},true);
