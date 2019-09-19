/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/ext/rls/Relationship"],function(R){"use strict";var S=R.extend("sap.gantt.shape.ext.rls.SelectedRelationship",{metadata:{properties:{stroke:{type:"string"},strokeWidth:{type:"int"}}}});S.prototype.getStroke=function(d){return"red";};S.prototype.getFill=function(d){return"red";};S.prototype.getStrokeWidth=function(d){return 2;};return S;},true);
