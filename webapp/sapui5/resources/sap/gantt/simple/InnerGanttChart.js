/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["jquery.sap.global","sap/ui/core/Core","sap/ui/core/Control","./GanttExtension"],function(q,C,a,G){"use strict";var I=a.extend("sap.gantt.simple.InnerGanttChart");I.prototype.getDomRef=function(){var p=this.getParent();if(p){return q.sap.domById(this.getParent().getId()+"-cnt");}return null;};I.prototype.invalidate=function(){this.getUIArea().addInvalidatedControl(this);};I.prototype.onAfterRendering=function(e){var g=this.getParent();var r=C.createRenderManager();this.getRenderer().renderRelationships(r,g);r.destroy();g._updateShapeSelections(g.getSelectedShapeUid(),[]);g._getConnectExtension().updateShapeConnectEffect(g);G.attachEvents(g);g.jumpToVisibleHorizon("initialRender");};return I;},true);
