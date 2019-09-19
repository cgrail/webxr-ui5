/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./InfoTile','./ChartTileRenderer'],function(I,C){"use strict";var a=I.extend("sap.suite.ui.commons.ChartTile",{metadata:{deprecated:true,library:"sap.suite.ui.commons",properties:{unit:{type:"string",group:"Misc",defaultValue:null}}}});a.prototype.init=function(){I.prototype.init.apply(this);};a.prototype.onAfterRendering=function(){this._addDescriptionMargin();};a.prototype.onBeforeRendering=function(){this._setContentProperty("size",this.getSize());};a.prototype._addDescriptionMargin=function(){if(this.getDescription()&&this.getUnit()){var d=this.$("description").hide();var w=this.$("unit").outerWidth()+1;d.css("margin-right","-"+w+"px").css("padding-right",w+"px").show();}};a.prototype._setContentProperty=function(p,v){var c=this.getContent();if(c){c.setProperty(p,v);}};return a;});
