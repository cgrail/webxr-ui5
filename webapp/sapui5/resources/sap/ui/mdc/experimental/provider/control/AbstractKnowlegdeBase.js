/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var A=B.extend("sap.ui.mdc.experimental.provider.control.AbstractKnowlegdeBase",{constructor:function(){this.init();},init:function(){},getProvider:function(c){throw new Error("sap.ui.mdc.experimental.provider.control.AbstractKnowlegdeBase:  method getPtovider must be redefined");},getName:function(){return Object.getPrototypeOf(this)._sName;}});return A;});
