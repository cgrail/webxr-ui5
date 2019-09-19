/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./ToolbarGroup'],function(T){"use strict";var Z=sap.gantt.config.ZoomControlType;var a=T.extend("sap.gantt.config.TimeZoomGroup",{metadata:{properties:{showZoomSlider:{type:"boolean",defaultValue:true},showZoomButtons:{type:"boolean",defaultValue:true},zoomControlType:{type:"sap.gantt.config.ZoomControlType",defaultValue:sap.gantt.config.ZoomControlType.SliderWithButtons},stepCountOfSlider:{type:"int",defaultValue:10},infoOfSelectItems:{type:"object[]"}}}});a.prototype.getZoomControlType=function(){var d=Z.SliderWithButtons;var c=this.getProperty("zoomControlType");if(c==d){return this._getZoomControlTypeByDeprecatedProperties();}return c;};a.prototype._getZoomControlTypeByDeprecatedProperties=function(){var s=this.getShowZoomSlider();var S=this.getShowZoomButtons();if(s&&S){return Z.SliderWithButtons;}if(s&&!S){return Z.SliderOnly;}if(!s&&S){return Z.ButtonsOnly;}if(!s&&!S){return Z.None;}return Z.SliderWithButtons;};return a;},true);
