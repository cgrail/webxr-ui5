/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/core/Core","./BaseRectangle","./TitlePropagator","./BasePath"],function(C,B,T,a){"use strict";var b=B.extend("sap.gantt.simple.BaseChevron",{metadata:{properties:{headWidth:{type:"sap.gantt.SVGLength",defaultValue:10},tailWidth:{type:"sap.gantt.SVGLength",defaultValue:10}}}});T.call(b.prototype,false);b.prototype.getD=function(){var r=C.getConfiguration().getRTL();var c=this.getHeadWidth(),t=this.getTailWidth();var x=this.getX(),w=this.getWidth(),h=this.getHeight(),y=this.getRowYCenter();var d=function(){var R="";for(var i=0;i<arguments.length;i++){R+=arguments[i]+" ";}return R;};if(!r){if(w-c<0){return d("M",x+w/2,y,"l",-w/2,-h/2,"h",w/2,"l",w/2,h/2,"l",-w/2,h/2,"h",-w/2)+"Z";}return d("M",x+t,y,"l",-t,-h/2,"h",w-c,"l",c,h/2,"l",-c,h/2,"h",c-w)+"Z";}else{if(w-c<0){return d("M",x,y,"l",w/2,-h/2,"h",w/2,"l",-w/2,h/2,"l",w/2,h/2,"h",-w/2)+"Z";}return d("M",x,y,"l",c,-h/2,"h",w-c,"l",-t,h/2,"l",t,h/2,"h",c-w)+"Z";}};b.prototype.renderElement=function(){if(this._isValid()){a.prototype.renderElement.apply(this,arguments);}};return b;},true);
