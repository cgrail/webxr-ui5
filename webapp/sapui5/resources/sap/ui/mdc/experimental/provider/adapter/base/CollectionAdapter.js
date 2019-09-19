/*
 * ! SAPUI5

		(c) Copyright 2009-2019 SAP SE. All rights reserved
	
 */
sap.ui.define(["sap/ui/thirdparty/jquery","./BaseAdapter"],function(q,B){"use strict";var C=B.extend("sap.ui.mdc.experimental.provider.model.CollectionAdapter",{constructor:function(m,M,s,c,a){var S=B;if(a){q.extend(S.prototype,a.prototype);S.prototype.constructor=B;}S.prototype.constructor.apply(this,arguments);this.putProperty("columns",this.columns);this.putProperty("measures",this.measures);this.putProperty("dimensions",this.dimensions);this.putProperty("filterItems",this.filterItems);},columns:function(){throw new Error("ap.ui.mdc.experimental.provider.model.CollectionAdapter:  method columns must be redefined");},measures:function(){throw new Error("ap.ui.mdc.experimental.provider.model.CollectionAdapter:  method measures must be redefined");},dimensions:function(){throw new Error("ap.ui.mdc.experimental.provider.model.CollectionAdapter:  method dimensions must be redefined");},filterItems:function(){throw new Error("ap.ui.mdc.experimental.provider.model.CollectionAdapter:  method filterItems must be redefined");}});return C;});
