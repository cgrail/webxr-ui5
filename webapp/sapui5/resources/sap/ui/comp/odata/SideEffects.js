/*
 * SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define([],function(){"use strict";var S=function(){};S.prototype.getSideEffects=function(p,t,m){var r={};if(m){if(p){if(m.entitySet){r.entitySet=this._getForPath(m.entitySet,p);}if(m.entityType){r.entityType=this._getForPath(m.entityType,p);}}if(t&&m.complexType){r.complexType=this._getForPath(m.complexType,t);}}return r;};S.prototype._getForPath=function(e,p){var n,s,r={};for(n in e){if(n.indexOf&&n.indexOf("com.sap.vocabularies.Common.v1.SideEffects")===0){s=e[n];if(this._checkSourceProperties(s,p)){r[n]=s;}if(this._checkSourceEntities(s,p)){r[n]=s;}}}return r;};S.prototype._checkSourceProperties=function(s,p){var i,l;if(s.SourceProperties){l=s.SourceProperties.length;for(i=0;i<l;i++){if(s.SourceProperties[i].PropertyPath===p){return true;}}}return false;};S.prototype._checkSourceEntities=function(s,p){var i,l;if(s.SourceEntities&&s.SourceEntities.Collection){l=s.SourceEntities.Collection.length;for(i=0;i<l;i++){if(s.SourceEntities.Collection[i].NavigationPropertyPath===p){return true;}}}return false;};S.prototype.destroy=function(){};return S;},true);
