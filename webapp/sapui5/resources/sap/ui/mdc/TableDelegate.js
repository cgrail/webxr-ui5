/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["./Column","sap/m/Text"],function(C,T){"use strict";var a={fetchProperties:function(t){return[];},_getVisibleProperties:function(t){var p=[],l;if(t){t.getColumns().forEach(function(m){l=m&&m.getDataProperties()[0];if(l){p.push({name:l,id:m.getId(),label:m.getHeader()});}});}return p;},_getSortedProperties:function(t){var s=[],p,v;p=t.data("$p13nSort");if(typeof p==="string"){p=p.replace(/\\{/g,"{");v=JSON.parse(p);}if(v){s=v;}return s;},getCurrentState:function(t){return{visibleFields:this._getVisibleProperties(t),sorters:this._getSortedProperties(t)};},createColumn:function(p,t){var c=this.getColumnInfo(p);c.template=this.createColumnTemplateInfo(p);return new C(c);},getColumnInfo:function(p){return{header:p.label||p.name,dataProperties:[p.name],hAlign:p.align,width:p.width};},getColumnTemplateInfo:function(p){return{text:{path:p.name},textAlign:p.align};},createColumnTemplate:function(p){return new T(this.getColumnTemplateInfo(p));}};return a;},false);
