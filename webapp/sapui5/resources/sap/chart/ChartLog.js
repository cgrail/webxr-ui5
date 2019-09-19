/*
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(["sap/base/Log"],function(L){"use strict";function C(t,n,m){this._type=t;this._name=n;this._message=m;}C.prototype.display=function(){if(this._type==="error"){L.error("[Analytical Chart] "+this._name,this._message);}};return C;});
