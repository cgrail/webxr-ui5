/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/core/Renderer'],function(R){"use strict";return{render:function(r,c){var a=c._oAcc,o=a.getRootAttributes(),t=c.getTitle();r.write("<div");r.addClass("sapFShellBar");if(c.getShowNotifications()){r.addClass("sapFShellBarNotifications");}r.writeAccessibilityState({role:o.role,label:o.label});r.writeControlData(c);r.writeClasses();r.write(">");if(t){r.write('<div id="'+c.getId()+'-titleHidden" role="heading" aria-level="1" class="sapFShellBarTitleHidden">');r.writeEscaped(t);r.write('</div>');}r.renderControl(c._getOverflowToolbar());r.write("</div>");}};},true);
