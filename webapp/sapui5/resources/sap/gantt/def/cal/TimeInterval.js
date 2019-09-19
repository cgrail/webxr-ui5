/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["../DefBase","sap/gantt/misc/Format","sap/ui/core/Core"],function(D,F,C){"use strict";var T=D.extend("sap.gantt.def.cal.TimeInterval",{metadata:{properties:{startTime:{type:"string",group:"Misc",defaultValue:null},endTime:{type:"string",group:"Misc",defaultValue:null}}}});T.prototype.setStartTime=function(s){this.setProperty("startTime",this._convertTimestamp(s));return this;};T.prototype.setEndTime=function(e){this.setProperty("endTime",this._convertTimestamp(e));return this;};T.prototype._convertTimestamp=function(t){var r=t;if(r&&typeof r==="object"){r=F.dateToAbapTimestamp(r);}return r;};T.prototype.getDefNode=function(){var a=(this.getParent()&&this.getParent().getParent()&&this.getParent().getParent().getParent())?this.getParent().getParent().getParent().getAxisTime():null;var s;var w;if(a){if(C.getConfiguration().getRTL()===true){s=a.timeToView(F.abapTimestampToDate(this.getEndTime()));w=a.timeToView(F.abapTimestampToDate(this.getStartTime()))-s;}else{s=a.timeToView(F.abapTimestampToDate(this.getStartTime()));w=a.timeToView(F.abapTimestampToDate(this.getEndTime()))-s;}}return{x:s,y:0,width:w};};return T;},true);
