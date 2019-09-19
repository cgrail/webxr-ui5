/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/type/Boolean","sap/ui/model/type/Date","sap/ui/model/type/Float","sap/ui/model/type/Integer","sap/ui/model/type/String"],function(B,D,F,I,S){"use strict";var J=function(){};J.prototype.getType=function(t){if(t){switch(t){case"Boolean":return new B();case"Date":return new D();case"Float":return new F();case"Integer":return new I();default:return new S();}}return null;};J.prototype.destroy=function(){};return J;},true);
