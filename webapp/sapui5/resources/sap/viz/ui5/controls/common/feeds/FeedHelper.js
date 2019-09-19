/*!
 * SAPUI5

(c) Copyright 2009-2019 SAP SE. All rights reserved
 */
sap.ui.define(function(){"use strict";var F={};F.getFeedDefsMap=function(v){var a;try{a=sap.viz.api.manifest.Viz.get(v)[0].allFeeds();}catch(e){try{a=sap.viz.api.metadata.Viz.get(v).bindings;}catch(b){return null;}}var m={};for(var i=0;i<a.length;i++){m[a[i].id]=a[i];}return m;};F.updateAxis=function(d,v,f){if(!f||f.length===0||!d||d.length===0){return;}var a={};d.forEach(function(c){a[c.getName()]=c;});var b=F.getFeedDefsMap(v);f.forEach(function(c){var e=b[c.getUid()];if(e.type!=='Dimension'){return;}var g=e.aaIndex;c.getValues().forEach(function(h){var i=a[h];if(i){i.setProperty('axis',g,true);}});});};return F;});
