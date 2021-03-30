sap.ui.define([
    "first/project/First_Project/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("first.project.First_Project.controller.CustomerList", {
        onInit: function () {

        },
        onPressDetails: function (oEvent) {
            var oBindingContext = oEvent.getSource().getBindingContext("data"),
                sCustomerId = oBindingContext.getProperty("CustomerID");
            this.getRouter().navTo("DetailsRoute", {
                customerId: sCustomerId
            });

        }
    });
});