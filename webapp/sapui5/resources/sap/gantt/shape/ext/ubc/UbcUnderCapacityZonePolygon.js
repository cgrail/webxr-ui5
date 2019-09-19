/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/misc/Format","sap/gantt/shape/ext/ubc/UbcPolygon"],function(F,U){"use strict";var a=U.extend("sap.gantt.shape.ext.ubc.UbcUnderCapacityZonePolygon",{});a.prototype.getFill=function(d,r){if(this.mShapeConfig.hasShapeProperty("fill")){return this._configFirst("fill",d);}return"#40d44c";};a.prototype.getPoints=function(d,r){if(this.mShapeConfig.hasShapeProperty("points")){return this._configFirst("points",d);}var o="";var m=this._getMaxY(d,r);var b=this._getMaxTotalRevised(d);var c=r.rowHeight-1;var e=d.drawData?d.drawData:d.period;var A=this.getAxisTime();for(var i=0;i<e.length;i++){var p=e[i];var x,f;x=A.timeToView(F.abapTimestampToDate(p.start_date)).toFixed(1);if(i<e.length-1){f=A.timeToView(F.abapTimestampToDate(e[i+1].start_date)).toFixed(1);}else{f=A.timeToView(F.abapTimestampToDate(e[i].start_date)).toFixed(1);}if(!jQuery.isNumeric(x)){x=A.timeToView(0).toFixed(1);}if(!jQuery.isNumeric(f)){f=A.timeToView(0).toFixed(1);}if(i===0){o+=x+","+m+" ";}var g=m-p.supply/b*c;g=g.toFixed(1);o+=x+","+g+" ";o+=f+","+g+" ";if(i===e.length-1){o+=x+","+g+" ";o+=x+","+m+" ";}}return o;};return a;},true);
