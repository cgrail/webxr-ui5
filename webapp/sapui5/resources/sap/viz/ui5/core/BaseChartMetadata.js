/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/ui/core/ElementMetadata'],function(E){"use strict";var B=function(C,o){o=o||{};o.renderer=o.renderer||'sap.viz.ui5.core.BaseChartRenderer';this.sVizChartType=(o.metadata&&o.metadata.vizChartType)||undefined;E.call(this,C,o);};B.prototype=Object.create(E.prototype||null);B.prototype.getVIZChartType=function(){return this.sVizChartType;};var a=E.prototype.metaFactoryAggregation;function V(C,n,i){a.call(this,C,n,i);}V.prototype=Object.create(a.prototype||null);V.prototype.generate=function(d){var n=this.name;d(this._sGetter,function(){return this._getOrCreate(n);});a.prototype.generate.call(this,d);};B.prototype.metaFactoryAggregation=V;var b=E.prototype.metaFactoryEvent;function c(C,n,i){b.call(this,C,n,i);}c.prototype=Object.create(b.prototype||null);c.prototype.generate=function(e){var n=this.name;e(this._sMutator,function(d,f,l){return this._attachVIZEvent(n,d,f,l);});e(this._sDetachMutator,function(d,f,l){return this._detachVIZEvent(n,f,l);});b.prototype.generate.call(this,e);};B.prototype.metaFactoryEvent=c;return B;});
