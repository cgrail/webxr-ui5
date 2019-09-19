/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","./library","./Gizmo","./TooltipToolGizmoRenderer"],function(q,l,G,T){"use strict";var a=G.extend("sap.ui.vk.tools.TooltipToolGizmo",{metadata:{library:"sap.ui.vk.tools"}});a.prototype.init=function(){if(G.prototype.init){G.prototype.init.apply(this);}this._viewport=null;this._tool=null;};a.prototype.show=function(v,t){this._viewport=v;this._tool=t;var b=this.getDomRef();if(b){b.style.display="none";}};a.prototype.hide=function(){this._tool=null;var t=this.getDomRef();if(t){t.style.display="none";}};a.prototype.setTitle=function(t){var b=this.getDomRef();if(b){b.style.display=t?"block":"none";b.innerText=t;}};a.prototype.update=function(x,y,b,c,n){if(this._tool.fireEvent("hover",{x:x,y:y,nodeRef:n},true)){var t=this.getDomRef();if(t){var o=t.offsetParent;while(o){b-=o.offsetLeft||0;c-=o.offsetTop||0;o=o.offsetParent;}b+=10;c+=15;t.style.left=Math.round(b)+"px";t.style.top=Math.round(c)+"px";var v=this._viewport.getDomRef().getBoundingClientRect();var d=t.getBoundingClientRect();if(d.right>v.right){t.style.left=Math.round(b+v.right-d.right)+"px";}if(d.bottom>v.bottom){t.style.top=Math.round(c+v.bottom-d.bottom)+"px";}}}};a.prototype.onBeforeRendering=function(){};a.prototype.onAfterRendering=function(){};return a;},true);
