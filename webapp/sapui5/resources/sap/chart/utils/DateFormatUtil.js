/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/chart/TimeUnitType','sap/ui/core/format/DateFormat'],function(T,D){"use strict";var P={};P[T.yearmonthday]="yyyyMMdd";P[T.yearquarter]="yyyyQQQQQ";P[T.yearmonth]="yyyyMM";P[T.yearweek]="yyyyww";function g(t){var p=P[t];if(p){return D.getDateInstance({pattern:p});}else{return null;}}return{getInstance:g};});
