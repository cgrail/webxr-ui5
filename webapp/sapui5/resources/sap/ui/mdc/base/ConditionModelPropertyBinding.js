/*!
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(['sap/ui/model/ChangeReason','sap/ui/model/json/JSONPropertyBinding','sap/base/util/merge','sap/base/util/deepEqual'],function(C,J,m,d){"use strict";var a=J.extend("sap.ui.mdc.base.ConditionModelPropertyBinding",{constructor:function(M,p,c,P){J.apply(this,arguments);this.oValue=_.call(this,this._getValue());}});a.prototype.getValue=function(){return _.call(this,this.oValue);};a.prototype.setValue=function(v){if(this.bSuspended){return;}if(!d(this.oValue,v)){if(this.oModel.setProperty(this.sPath,v,this.oContext,true)){this.oValue=_.call(this,v);this.getDataState().setValue(this.oValue);this.oModel.firePropertyChange({reason:C.Binding,path:this.sPath,context:this.oContext,value:v});}}};a.prototype.checkUpdate=function(f){if(this.bSuspended&&!f){return;}var v=this._getValue();if(!d(v,this.oValue)||f){this.oValue=_.call(this,v);this.getDataState().setValue(this.oValue);this.checkDataState();this._fireChange({reason:C.Change});}};function _(v){var c;if(!v){c=v;}else if(Array.isArray(v)){c=m([],v);}else if(v instanceof Date){c=new Date(v);}else if(typeof v==="object"){c=m({},v);}else{c=v;}return c;}return a;});
