/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(["sap/ui/base/Object"],function(B){"use strict";var N=B.extend("sap.ui.generic.app.navigation.service.NavError",{metadata:{publicMethods:["getErrorCode"],properties:{},library:"sap.ui.generic.app"},constructor:function(e){B.apply(this);this._sErrorCode=e;}});N.prototype.getErrorCode=function(){return this._sErrorCode;};return N;});
