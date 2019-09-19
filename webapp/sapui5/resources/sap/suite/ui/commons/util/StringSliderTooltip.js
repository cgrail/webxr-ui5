/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/m/SliderTooltipBase"],function(S){"use strict";var a=S.extend("sap.suite.ui.commons.util.StringSliderTooltip",{metadata:{library:"sap.suite.ui.commons.util",properties:{mapFunction:{type:"any",group:"Misc"},fetchValue2:{type:"boolean",group:"Misc",defaultValue:false}}},renderer:function(r,c){var v=c.getStringValue();if(!v){return;}r.write("<div");r.writeControlData(c);r.addClass("sapMSliderTooltip");r.addClass("sapSuiteUiCommonsStringSliderTooltip");r.writeClasses(c);r.write(">");r.writeEscaped(v);r.write("</div>");}});a.prototype.getStringValue=function(){var p=this.getParent();if(!p){return null;}var v=this.getFetchValue2()?p.getValue2():p.getValue();var m=this.getMapFunction()||String;return m(v);};a.prototype.sliderValueChanged=function(v){var m=this.getMapFunction()||String,V=m(v);this.$().text(V);};return a;});
