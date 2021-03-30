sap.ui.define([
	"first/project/First_Project/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("first.project.First_Project.controller.Details", {
		onInit: function () {
            this.getRouter().getRoute("DetailsRoute").attachPatternMatched(this._onPatternMatchedDetails, this);
		},
        _onPatternMatchedDetails: function(oEvent){
            var sCustomerId = oEvent.getParameter("arguments").customerId;
            
        },
        onNavBackButtonPress: function () {
			this.navBack();
		}
	});
});