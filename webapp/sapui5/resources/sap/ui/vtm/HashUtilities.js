/*
 * ! SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var H={};H.hashString=function(s){var h=0xC716A2B2;for(var i=0;i<s.length;i++){h=((h+s.charCodeAt(i))*7)|0;}return h;};H.hashMatrix=function(v){var h=0x16C7;for(var i=0;i<v.length;i++){var c=Math.round(Math.round(v[i]*10.0)/10.0);h=((c+h)*7)|0;}return h;};H.normalizeHash=function(h,u){if(!u){u=50000;}return Math.abs(h)%u;};H.combineHashes=function(h,u){var a=0xF23916C7;for(var i=0;i<h.length;i++){a=((h[i]+a)*3)|0;}return H.normalizeHash(a,u);};return H;},true);
