/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(["sap/chart/data/Dimension","sap/chart/utils/ChartUtils"],function(D,C){"use strict";var H=D.extend("sap.chart.data.HierarchyDimension",{metadata:{library:"sap.chart",properties:{level:{type:"int",defaultValue:0}}}});H.prototype.setLevel=C.makeNotifyParentProperty("level");H.prototype._getEffectiveLevel=function(){if(this._iEffectiveLevel==null){return this.getLevel();}else{return this._iEffectiveLevel;}};return H;});
