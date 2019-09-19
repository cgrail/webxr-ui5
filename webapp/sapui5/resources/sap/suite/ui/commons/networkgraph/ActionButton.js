/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var A=E.extend("sap.suite.ui.commons.networkgraph.ActionButton",{metadata:{library:"sap.suite.ui.commons",properties:{icon:{type:"string",group:"Appearance",defaultValue:null},title:{type:"string",group:"Appearance",defaultValue:null},enabled:{type:"boolean",group:"Appearance",defaultValue:true},position:{type:"sap.suite.ui.commons.networkgraph.ActionButtonPosition",group:"Appearance",defaultValue:"Right"}},events:{press:{parameters:{buttonElement:{type:"object"}}}}}});A.prototype.invalidate=function(){var p=this.getParent();if(p&&p._bActionButtonsRendered&&!this._bTimeoutRunning){this._bTimeoutRunning=true;setTimeout(function(){this._bTimeoutRunning=false;p._bActionButtonsRendered=false;p.showActionButtons(true);}.bind(this),0);}};return A;});
