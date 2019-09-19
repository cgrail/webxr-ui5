/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/m/ActionSheetRenderer','sap/ui/core/Renderer','sap/m/Dialog',"sap/ui/Device"],function(A,R,D,a){"use strict";var L=R.extend(A);L.render=function(r,c){var b=c.getItems(),i,m=false;for(i=0;i<b.length;i++){if(b[i].getIcon&&b[i].getIcon()){m=true;break;}}r.write("<div");r.writeControlData(c);r.addClass("sapMActionSheet");r.addClass("sapUILinkActionSheet");if(m){r.addClass("sapMActionSheetMixedButtons");}r.writeClasses();var t=c.getTooltip_AsString();if(t){r.writeAttributeEscaped("title",t);}r.write(">");for(i=0;i<b.length;i++){if(b[i].getType){var B=b[i];B.addStyleClass("sapMActionSheetButton");B.addStyleClass("sapUILinkActionSheetButton");r.renderControl(B);}else if(b[i].getHref){r.renderControl(b[i].addStyleClass("sapUILinkActionSheetLink"));}}if((a.os.ios&&a.system.phone||(D._bOneDesign&&a.system.phone))&&c.getShowCancelButton()){r.renderControl(c._getCancelButton());}r.write("</div>");};return L;},true);
