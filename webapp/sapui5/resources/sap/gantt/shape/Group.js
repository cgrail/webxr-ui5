/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape"],function(S){"use strict";var G=S.extend("sap.gantt.shape.Group",{metadata:{properties:{tag:{type:"string",defaultValue:"g"},RLSAnchors:{type:"object"}},aggregations:{shapes:{type:"sap.gantt.shape.Shape",multiple:true,singularName:"shape"}}}});G.prototype.getRLSAnchors=function(d,r){return this._configFirst("RLSAnchors",d);};G.prototype.genReferenceId=function(d,r){return this._configFirst("referenceId",d);};return G;},true);
