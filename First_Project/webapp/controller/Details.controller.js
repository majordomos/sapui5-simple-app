sap.ui.define([
	"first/project/First_Project/controller/BaseController",
	"first/project/First_Project/model/formatter",
	"first/project/First_Project/model/constants",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (BaseController, formatter, Constants, JSONModel, MessageToast) {
	"use strict";

	return BaseController.extend("first.project.First_Project.controller.Details", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel({
				CurrentViewMode: Constants.VIEW_MODES.DISPLAY
			});
			this.setModel(oViewModel, "this")
			this.getRouter().getRoute("DetailsRoute").attachPatternMatched(this._onPatternMatchedDetails, this);
		},
		_onPatternMatchedDetails: function (oEvent) {
			var sCustomerId = oEvent.getParameter("arguments").customerId;
			var oDataModel = this.getModel("data");
			oDataModel.read("/Customers('" + sCustomerId + "')", {
				success: function (oCustomer) {
					this.getModel("this").setProperty("/Customer", oCustomer);
				}.bind(this),
				error: function (oError) {
					MessageToast.show(oError.responseText);
				}
			});

		},
		onPressNavBackButton: function () {
			this.navBack();
		},
		onPressEditButton: function () {
			this.getModel("this").setProperty("/CurrentViewMode", Constants.VIEW_MODES.EDIT);
		},
		onPressSaveButton: function(){
			this.getModel("this").setProperty("/CurrentViewMode", Constants.VIEW_MODES.DISPLAY);
		},
		onPressCancelButton: function(){
			this.getModel("this").setProperty("/CurrentViewMode", Constants.VIEW_MODES.DISPLAY);
		}
	});
});