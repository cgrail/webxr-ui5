/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","../Extension"],function(q,S,a){"use strict";var M=a.extend("sap.ui.vtm.extensions.MessageStatusIconClickExtension",{metadata:{interfaces:["sap.ui.vtm.interfaces.IMessageStatusIconClickExtension"]},constructor:function(i,s){a.apply(this,arguments);},initialize:function(){this.applyPanelHandler(function(p){var t=p.getTree();var m;t.attachMessageStatusIconClicked(function(e){if(!this.getEnabled()){return;}if(m&&m.isOpen()){m.close();}var i=e.getParameter("item");var s=e.getParameter("control");var b=sap.ui.vtm.TreeItemUtilities.getMessages(i);if(b.length){b.sort(sap.ui.core.Message.compareByType).reverse();m=new sap.ui.vtm.MessagesPopover({messages:b,maxHeight:"300px"});m.openBy(s);}}.bind(this));}.bind(this));}});return M;});
