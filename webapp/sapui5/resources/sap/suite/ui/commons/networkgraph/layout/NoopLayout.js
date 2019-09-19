/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/suite/ui/commons/library","./LayoutAlgorithm","./LayoutTask"],function(l,L,a){"use strict";var b=l.networkgraph.LayoutRenderType;var N=L.extend("sap.suite.ui.commons.networkgraph.layout.NoopLayout");N.prototype.getLayoutRenderType=function(){return b.LayeredWithGroups;};N.prototype.layout=function(){return new a(function(r,R,o){var g=this.getParent();if(o.isTerminated()){r();return;}if(!g){R("The algorithm must be associated with a graph.");return;}this._normalizeLines();r();}.bind(this));};return N;});
