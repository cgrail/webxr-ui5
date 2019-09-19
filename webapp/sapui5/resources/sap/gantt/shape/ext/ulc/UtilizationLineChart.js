/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Group"],function(G){"use strict";var U=G.extend("sap.gantt.shape.ext.ulc.UtilizationLineChart",{});U.prototype.getEnableSelection=function(d,r){if(this.mShapeConfig.hasShapeProperty("enableSelection")){return this._configFirst("enableSelection",d);}return false;};return U;},true);
