/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","sap/ui/base/DataType"],function(q,D){"use strict";var T=D.getType("float[]");T.parseValue=function(v){var c=T.getComponentType();return v.split(/\s*,\s*|\s+/).map(c.parseValue.bind(c));};T.convertTo4x4=function(a){var m=a;return[m[0],m[1],m[2],0,m[3],m[4],m[5],0,m[6],m[7],m[8],0,m[9],m[10],m[11],1];};T.convertTo4x3=function(a){var m=a;return[m[0],m[1],m[2],m[4],m[5],m[6],m[8],m[9],m[10],m[12],m[13],m[14]];};q.sap.setObject("sap.ui.vk.TransformationMatrix",T);return T;});
