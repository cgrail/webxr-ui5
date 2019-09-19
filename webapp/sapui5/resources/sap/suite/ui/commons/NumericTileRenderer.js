/*!
 * 
		SAP UI development toolkit for HTML5 (SAPUI5)
		(c) Copyright 2009-2015 SAP SE. All rights reserved
	
 */
sap.ui.define(['./InfoTileRenderer','sap/ui/core/Renderer'],function(I,R){"use strict";var N=R.extend(I);N._getFooterText=function(r,c){var f=c.getFooter();var u=c.getUnit();return u?(sap.ui.getCore().getConfiguration().getRTL()?((f?f+" ,":"")+u):(u+(f?", "+f:""))):f;};N.renderFooterTooltip=function(r,c){r.writeAttributeEscaped("title",this._getFooterText(r,c));};N.renderFooterText=function(r,c){r.writeEscaped(this._getFooterText(r,c));};return N;},true);
