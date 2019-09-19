/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Renderer','sap/ui/core/IconPool'],function(R,I){"use strict";I.insertFontFaceStyle();var F=R.extend("sap.ui.mdc.base.FieldBaseRenderer");F.render=function(r,f){var c=f._getContent();var w=f.getWidth();r.write("<div");r.writeControlData(f);r.addClass("sapUiMdcBaseField");if(w){r.addStyle("width",w);}r.writeStyles();r.writeClasses();r.write(">");if(c){r.renderControl(c);}r.write("</div>");};return F;},true);
