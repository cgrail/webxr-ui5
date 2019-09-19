/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(['sap/viz/library','sap/viz/ui5/core/BaseStructuredType'],function(l,B){"use strict";var T=B.extend("sap.viz.ui5.types.Treemap",{metadata:{library:"sap.viz",properties:{startColor:{type:"string",defaultValue:'#C2E3A9'},endColor:{type:"string",defaultValue:'#73C03C'},colorPalette:{type:"string[]"},legendValues:{type:"int[]"},formatRules:{type:"object[]"}},aggregations:{border:{type:"sap.viz.ui5.types.Treemap_border",multiple:false},animation:{type:"sap.viz.ui5.types.Treemap_animation",multiple:false},toolTip:{type:"sap.viz.ui5.types.Treemap_tooltip",multiple:false,deprecated:true}}}});return T;});
