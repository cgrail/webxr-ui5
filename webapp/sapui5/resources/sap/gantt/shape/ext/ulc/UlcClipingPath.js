/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Path","sap/gantt/misc/Format"],function(P,F){"use strict";var U=P.extend("sap.gantt.shape.ext.ulc.UlcClipingPath",{});U.prototype.getD=function(d,r){var a="";if(this.mShapeConfig.hasShapeProperty("d")){a=this._configFirst("d",d);}else{if(d.values){for(var i=0;i<d.values.length;i++){var A=this.getAxisTime();var x=A.timeToView(F.abapTimestampToDate(d.values[i].from));var b=A.timeToView(F.abapTimestampToDate(d.values[i].to));var c=d.values[i].value;if(isNaN(c)){c=0;}var m=25;if(this.mShapeConfig.hasShapeProperty("maxVisibleRatio")){m=this._configFirst("maxVisibleRatio",d);}if(c>(100+m)){c=100+m;}var y=r.y+r.rowHeight-r.rowHeight*(c/(100+m));var l=r.y+r.rowHeight;a=a+(d.values[i].firstOne?" M "+x+" "+l:"")+" L "+x+" "+y+" L "+b+" "+y+(d.values[i].lastOne?" L "+b+" "+l:"");}}}if(this.isValid(a)){return a;}else{jQuery.sap.log.warning("UlcClipingPath shape generated invalid d: "+a+" from the given data: "+d);return null;}};return U;},true);
