/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(["sap/chart/data/Dimension","sap/chart/utils/ChartUtils"],function(D,C){"use strict";var T=D.extend("sap.chart.data.TimeDimension",{metadata:{library:"sap.chart",properties:{timeUnit:{type:"sap.chart.TimeUnitType"},fiscalYearPeriodCount:{type:"object"},projectedValueStartTime:{type:"any"}}}});T.prototype.setTimeUnit=C.makeNotifyParentProperty("timeUnit");T.prototype.setFiscalYearPeriodCount=C.makeNotifyParentProperty("fiscalYearPeriodCount");T.prototype.setProjectedValueStartTime=C.makeNotifyParentProperty("projectedValueStartTime");return T;});
