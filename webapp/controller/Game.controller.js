/*global THREE TWEEN*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"webar-test/assets/ArAssets"
], function(Controller, MessageToast, ArAssets) {
	"use strict";

	return Controller.extend("webar-test.controller.Game", {
		onInit: function() {
			this.arView = this.byId("arView");
			this.assets = new ArAssets();
		},

		shoot: function() {
			MessageToast.show("Please implement me...");
		}
	});
});