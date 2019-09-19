/*
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/chart/coloring/emphasis/DimensionValues','sap/chart/coloring/ColorPalette','sap/chart/coloring/ColoringUtils','sap/chart/ChartLog','sap/chart/data/TimeDimension',"sap/ui/thirdparty/jquery"],function(D,C,a,b,T,q){"use strict";var t=q.type,S=['DimensionValues','MeasureValues'];function c(d,l){var o=d[0];var e=o.parsed.callbacks.Highlight||[];var L=o.parsed.legend;var r=[];r.push({callback:e,properties:{color:C.EMPHASIS.Highlight},displayName:L.Highlight});var O={properties:{color:C.EMPHASIS.Others},displayName:L.Others};return{rules:r,others:O};}function g(d,l){return function(){var p={plotArea:{dataPointStyle:c(d)}};return{properties:p};};}return{getCandidateSetting:function(o,A,d,e,s,f,l){var E=o.Emphasis||{},p=A.parameters||{};var u=a.dimOrMsrUse(E,p,S,'Emphasis');var h;switch(u){case'DimensionValues':var i=p.dimension||Object.keys(E.DimensionValues);if(t(i)==='string'){i=[i];}h=D.qualify(E.DimensionValues,i,e,f);if(h){h.parsed=D.parse(h,l);h.ruleGenerator=g([h]);}break;default:return{};}if(h.length){h.subType=u;}return h;}};});
