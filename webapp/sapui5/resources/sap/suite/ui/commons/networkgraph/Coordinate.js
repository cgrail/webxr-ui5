/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Element"],function(E){"use strict";var C=E.extend("sap.suite.ui.commons.networkgraph.Coordinate",{metadata:{library:"sap.suite.ui.commons",properties:{x:{type:"float",group:"Misc",defaultValue:undefined},y:{type:"float",group:"Misc",defaultValue:undefined}}}});C.prototype.setX=function(x){this.setProperty("x",x,true);return this;};C.prototype.setY=function(y){this.setProperty("y",y,true);return this;};return C;});
