/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/gantt/shape/Shape"],function(S){"use strict";var C=S.extend("sap.gantt.shape.ClipPath",{metadata:{properties:{tag:{type:"string",defaultValue:"clippath"}},aggregations:{paths:{type:"sap.gantt.shape.Path",multiple:true,singularName:"path"}}}});return C;},true);
