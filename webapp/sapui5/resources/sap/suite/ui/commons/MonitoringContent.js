/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./library','sap/ui/core/Control','sap/ui/core/Icon',"sap/ui/events/KeyCodes","./MonitoringContentRenderer"],function(l,C,I,K,M){"use strict";var a=C.extend("sap.suite.ui.commons.MonitoringContent",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{value:{type:"string",group:"Misc",defaultValue:null},iconSrc:{type:"string",group:"Misc",defaultValue:null},size:{type:"sap.suite.ui.commons.InfoTileSize",group:"Misc",defaultValue:"Auto"},state:{type:"sap.suite.ui.commons.LoadState",group:"Misc",defaultValue:"Loaded"},animateTextChange:{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{icon:{type:"sap.ui.core.Icon",multiple:false}},events:{press:{}}}});a.prototype.init=function(){this._oIcon=new I(this.getId()+"-icon");this.setAggregation("icon",this._oIcon);};a.prototype.onAfterRendering=function(){if(l.LoadState.Loaded===this.getState()||this.getAnimateTextChange()){this.$().animate({opacity:"1"},1000);}};a.prototype.setIconSrc=function(i){this._oIcon.setSrc(i);return this;};a.prototype.getIconSrc=function(){return this._oIcon.getSrc();};a.prototype.ontap=function(e){this.firePress();};a.prototype.onkeydown=function(e){if(e.which===K.ENTER||e.which===K.SPACE){this.firePress();e.preventDefault();}};return a;});
