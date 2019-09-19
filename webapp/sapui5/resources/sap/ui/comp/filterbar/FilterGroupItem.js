/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['./FilterItem','sap/ui/comp/library'],function(F,l){"use strict";var a=F.extend("sap.ui.comp.filterbar.FilterGroupItem",{metadata:{library:"sap.ui.comp",properties:{groupTitle:{type:"string",group:"Misc",defaultValue:null},groupName:{type:"string",group:"Misc",defaultValue:null},visibleInAdvancedArea:{type:"boolean",group:"Misc",defaultValue:false}}}});a.prototype.init=function(){this.setVisibleInAdvancedArea(false);this._setParameter(false);};a.prototype._setParameter=function(v){this._bIsParameter=v;};a.prototype.setGroupTitle=function(v){this.setProperty("groupTitle",v);this.fireChange({propertyName:"groupTitle"});return this;};a.prototype.setVisibleInAdvancedArea=function(v){this.setVisibleInFilterBar(v);return this;};a.prototype.getVisibleInAdvancedArea=function(){return this.getVisibleInFilterBar();};a.prototype.destroy=function(){F.prototype.destroy.apply(this,arguments);};return a;},true);
