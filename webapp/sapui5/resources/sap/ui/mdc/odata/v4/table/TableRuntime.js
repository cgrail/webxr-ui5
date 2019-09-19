/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/model/json/JSONModel"],function(J){"use strict";var T={setContexts:function(t,m,p,d){var s=t.getSelectedContexts();var a=false;var D=[];var M;var c="/$contexts/"+p;var C=t.getModel(m);if(!C){C=new J();t.setModel(C,"$contexts");}C.setProperty("/$contexts",{});C.setProperty(c,{selectedContexts:s,numberOfSelectedContexts:s.length,deleteEnabled:true,deletableContexts:[]});for(var i=0;i<s.length;i++){var o=s[i].getObject();for(var k in o){if(k.indexOf("#")===0){var A=k;A=A.substring(1,A.length);M=C.getProperty(c);M[A]=true;C.setProperty(c,M);}}M=C.getProperty(c);if(d!="undefined"){if(s[i].getProperty(d)){D.push(s[i]);a=true;}M["deleteEnabled"]=a;C.setProperty(c,M);}else{D.push(s[i]);}}M["deletableContexts"]=D;C.setProperty(c,M);}};return T;},true);
