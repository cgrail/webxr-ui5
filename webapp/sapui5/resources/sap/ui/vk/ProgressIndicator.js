/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./library","sap/m/ProgressIndicator","./ProgressIndicatorRenderer"],function(q,l,M,P){"use strict";var a=M.extend("sap.ui.vk.ProgressIndicator");a.prototype.setPercentValue=function(p){var i=function i(v){return(typeof(v)==="number")&&!isNaN(v)&&v>=0&&v<=100;};var t=this,$,f,b=this.$(),A,u=false;if(!i(p)){p=0;q.sap.log.warning(this+": percentValue ("+p+") is not correct! Setting the default percentValue:0.");}if(this.getPercentValue()!==p){f=this.getPercentValue()-p;this.setProperty("percentValue",p,true);if(!b.length){return this;}["sapMPIValueMax","sapMPIValueMin","sapMPIValueNormal","sapMPIValueGreaterHalf"].forEach(function(c){b.removeClass(c);});b.addClass(this._getCSSClassByPercentValue(p));b.addClass("sapMPIAnimate").attr("aria-valuenow",p).attr("aria-valuetext",this._getAriaValueText({fPercent:p}));A=u?Math.abs(f)*20:0;$=this.$("bar");$.animate({"flex-basis":p+"%"},A,"linear",function(){t._setText.apply(t);t.$().removeClass("sapMPIAnimate");});}return this;};return a;},true);
