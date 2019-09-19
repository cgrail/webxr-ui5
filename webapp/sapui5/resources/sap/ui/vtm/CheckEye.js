/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Icon","sap/ui/core/IconRenderer","./library"],function(q,I,a,l){"use strict";var C=I.extend("sap.ui.vtm.CheckEye",{metadata:{library:"sap.ui.vtm",properties:{visibility:{type:"boolean"}}},onAfterRendering:function(){var $=this.$();$.addClass("sapUiVtmCheckEye");},renderer:a.render,setVisibility:function(v){this.setProperty("visibility",v);switch(v){case true:this.setSrc("sap-icon://show");this.setVisible(true);break;case false:this.setSrc("sap-icon://hide");this.setVisible(true);break;default:this.setVisible(false);break;}}});return C;},true);
