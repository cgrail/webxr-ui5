/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/base/ManagedObject",'sap/ui/core/Element'],function(M,E){"use strict";var S=E.extend("sap.gantt.def.SvgDefs",{metadata:{defaultAggregation:"defs",aggregations:{defs:{type:"sap.gantt.def.DefBase",multiple:true,visibility:"public",singularName:"def",bindable:"bindable"}}}});S.prototype.getDefString=function(){var r="<defs id='"+this.getId()+"'>",d=this.getDefs();if(d&&d.length>0){d.forEach(function(D){r+=D.getDefString();});}return r+"</defs>";};S.prototype.getDefNode=function(){var r={"id":this.getId(),"defNodes":[]};var d=this.getDefs();for(var i=0;i<d.length;i++){r.defNodes.push(d[i].getDefNode());}return r;};return S;},true);
