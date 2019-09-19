/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/core/Element',"sap/gantt/misc/Format"],function(E,F){"use strict";var T=E.extend("sap.gantt.config.TimeHorizon",{metadata:{library:"sap.gantt",properties:{startTime:{type:"string",group:"Misc",defaultValue:undefined},endTime:{type:"string",group:"Misc",defaultValue:undefined}}}});T.prototype.setStartTime=function(s,S){this.setProperty("startTime",this._convertTimestamp(s),S);};T.prototype.setEndTime=function(e,s){this.setProperty("endTime",this._convertTimestamp(e),s);};T.prototype._convertTimestamp=function(t){var r=t;if(r&&typeof r==="object"){r=F.dateToAbapTimestamp(r);}return r;};return T;},true);
