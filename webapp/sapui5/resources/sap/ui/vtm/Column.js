/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Element","sap/ui/commons/Label"],function(q,S,a){"use strict";var C=S.extend("sap.ui.vtm.Column",{metadata:{properties:{type:{type:"sap.ui.vtm.ColumnType"},descriptor:{type:"string"},tooltip:{type:"string",defaultValue:null},hAlign:{type:"sap.ui.core.HorizontalAlign",defaultValue:"Left"},width:{type:"sap.ui.core.CSSSize",defaultValue:"200px"},resizable:{type:"boolean",defaultValue:true},label:{type:"string"},labelControl:{type:"object"},valueFormatter:{type:"any"},tooltipFormatter:{type:"any"},template:{type:"sap.ui.core.Control"}}},constructor:function(i,s){if(q.type(i)=="object"){s=i;i=s.id;}S.apply(this,[i,{}]);if(s){if(s.type){this.setType(s.type);}if(s.descriptor){this.setDescriptor(s.descriptor);}if(s.label){this.setLabel(s.label);}if(s.labelControl){this.setLabelControl(s.labelControl);}if(s.tooltip){this.setTooltip(s.tooltip);}if(s.hAlign){this.setHAlign(s.hAlign);}if(s.width){this.setWidth(s.width);}if(s.resizable===true||s.resizable===false){this.setResizable(s.resizable);}if(s.valueFormatter){this.setValueFormatter(s.valueFormatter);}if(s.tooltipFormatter){this.setTooltipFormatter(s.tooltipFormatter);}if(s.template){this.setTemplate(s.template);}}}});return C;});
