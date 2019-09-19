/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Control','sap/m/library','./LaunchTileRenderer'],function(C,M,L){"use strict";var a=C.extend("sap.suite.ui.commons.LaunchTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{title:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},link:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null}},events:{press:{}}}});a.prototype.exit=function(){if(this._iconImage){this._iconImage.destroy();this._iconImage=undefined;}};a.prototype.setIcon=function(u){this.setProperty("icon",u,true);var i=this.getId()+"-img";var s="72px";var p={src:u,height:s,width:s,size:s};this._iconImage=M.ImageHelper.getImageControl(i,this._iconImage,this,p);return this;};a.prototype.onclick=function(){this.firePress({title:this.getTitle(),link:this.getLink()});};return a;});
