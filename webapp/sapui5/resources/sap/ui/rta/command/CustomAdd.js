/*!
 * OpenUI5
 * (c) Copyright 2009-2019 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['sap/ui/rta/command/FlexCommand'],function(F){"use strict";var C=F.extend("sap.ui.rta.command.CustomAdd",{metadata:{library:"sap.ui.rta",properties:{index:{type:"int"},addElementInfo:{type:"object"},aggregationName:{type:"string"},customItemId:{type:"string"}}}});C.prototype._getChangeSpecificData=function(){var s={customItemId:this.getCustomItemId(),changeType:this.getChangeType(),index:this.getIndex(),addElementInfo:this.getAddElementInfo(),aggregationName:this.getAggregationName()};return s;};return C;},true);
