sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";

    return Controller.extend("first.project.First_Project.controller.BaseController", {
        getRouter: function () {
            return this.getOwnerComponent().getRouter(this);
        },
        getModel: function(sName){
            return this.getView().getModel(sName);
        },
        setModel: function(oModel, sName){
            return this.getView().setModel(oModel, sName);
        },
        navBack: function () {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getOwnerComponent().getRouter(this).navTo("RouteApp", {}, true /*no history*/);
			}
		},
        i18n: function(){
            return this.getModel("i18n");
        }
    });
});