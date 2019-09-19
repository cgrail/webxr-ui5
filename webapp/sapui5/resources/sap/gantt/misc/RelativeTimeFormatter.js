/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/base/util/ObjectPath"],function(O){"use strict";var R=function(b,u,p){this.oBaseTime=b;this.sUnit=u;this.sPrefix=p;this.iIntervalMillisecond=O.get(u).offset(b,1).getTime()-b.getTime();};R.prototype.format=function(d){var t;var s=Math.floor((d.getTime()-this.oBaseTime.getTime())/this.iIntervalMillisecond)+1;t=this.sPrefix+" "+s;return t;};return R;},true);
