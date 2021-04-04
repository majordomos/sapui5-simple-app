sap.ui.define([
    "first/project/First_Project/controller/BaseController",
    "sap/ui/core/Fragment",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (BaseController, Fragment, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("first.project.First_Project.controller.CustomerList", {
        onInit: function () {
            var oProperties = {
                CreateCustomerDialogData: {
                    CompanyName: "",
                    ContactName: "",
                    ContactTitle: "",
                    Address: "",
                    City: "",
                    Region: "",
                    PostalCode: "",
                    Country: "",
                    Phone: "",
                    Fax: ""
                }
            };
            var oNewCustomer = new JSONModel();
            oNewCustomer.setData(oProperties);
            this.setModel(oNewCustomer, "this")
        },
        navigateToCustomer: function (sCustomerId) {
            this.getRouter().navTo("DetailsRoute", {
                customerId: sCustomerId
            });
        },
        onPressDetails: function (oEvent) {
            var oBindingContext = oEvent.getSource().getBindingContext("data"),
                sCustomerId = oBindingContext.getProperty("CustomerID");
                this.navigateToCustomer(sCustomerId);
        },
        onPressCreateCustomer: function () {
            if (!this.oCustomerDialog) {
                var oView = this.getView();
                this.oCustomerDialog = Fragment.load({
                    id: oView.getId(),
                    name: "first.project.First_Project.fragments.CreateCustomerDialog",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }
            this.oCustomerDialog.then(function (oDialog) {
                oDialog.open();
            });
        },
        onPressSaveButton: function () {
            var oDialog = this.getDialogCreateCustomer();
            oDialog.setBusy(true);
            var oNewCustomer = this.getModel("this").getProperty("/CreateCustomerDialogData");
            var oODataModel = this.getModel("data");
            oODataModel.create("/Customers", oNewCustomer, {
                success: function (oCustomer) {
                    MessageToast.show("Customer created");
                    this.navigateToCustomer(oCustomer.customerId);
                }.bind(this),
                error: function (oError) {
                    oDialog.setBusy(false);
                }
            });
        },
        getDialogCreateCustomer: function () {
            return this.byId("createCustomerDialogID");
        },
        onPressCancelButton: function () {
            this.getDialogCreateCustomer().close();
        },
        onAfterCloseCreateCustomerDialog: function () {
            this.getDialogCreateCustomer().destroy();
            this.oCustomerDialog = null;
        },
    });
});