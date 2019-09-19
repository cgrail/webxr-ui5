/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/mdc/XMLComposite',"sap/m/OverflowToolbar","sap/m/FlexItemData","sap/base/Log"],function(X,O,F,L){"use strict";var C=X.extend("sap.ui.mdc.experimental.chart.Chart",{metadata:{library:"sap.ui.mdc",defaultAggregation:"",properties:{entitySet:{type:"string",group:"Misc",defaultValue:null},chartType:{type:"string",group:"Misc",defaultValue:null},header:{type:"string",group:"Misc",defaultValue:null},showDetailsButton:{type:"boolean",group:"Misc",defaultValue:false},showDrillBreadcrumbs:{type:"boolean",group:"Misc",defaultValue:false},showChartTooltip:{type:"boolean",group:"Misc",defaultValue:true},showToolbar:{type:"boolean",group:"Misc",defaultValue:true}},aggregations:{toolbar:{type:"sap.m.Toolbar",multiple:false},dimensions:{type:"sap.chart.data.Dimension",multiple:true,forwarding:{idSuffix:"--innerChart",aggregation:"dimensions"}},measures:{type:"sap.chart.data.Measure",multiple:true,forwarding:{idSuffix:"--innerChart",aggregation:"measures"}}}}});C.prototype.init=function(){L.info("Chart init");sap.m.FlexBox.prototype.init.call(this);this.addStyleClass("sapUiMdcChart");};C.prototype._getChart=function(){return sap.ui.getCore().byId(this.getId()+"--innerChart")||null;};return C;},true);
