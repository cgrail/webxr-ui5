sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "webar-test/assets/ArAssets"
], (Controller, MessageToast, ArAssets) => {
    "use strict";

    return Controller.extend("webar-test.controller.Game", {

        onInit() {
            this.arView = this.byId("arView");
            this.assets = new ArAssets();
        },

        shoot() {
            MessageToast.show("Please implement me...");
        }
    });
});