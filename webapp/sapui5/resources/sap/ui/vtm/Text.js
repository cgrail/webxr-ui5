/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/m/Text","sap/m/TextRenderer","./TextColor"],function(q,S,a,b){"use strict";sap.ui.vtm.Text=S.extend("sap.ui.vtm.Text",{metadata:{properties:{textColor:{type:"sap.ui.vtm.TextColor",defaultValue:b.Default,bindable:true}}},renderer:function(r,c){var t=c.getTextColor();switch(t){case b.Default:break;case b.Grey:case b.Gray:r.addClass("sapUiVtmText_TextColor_Gray");break;default:throw"Unexpected text color: '"+t+"'.";}a.render(r,c);}});return sap.ui.vtm.Text;});
