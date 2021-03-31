sap.ui.define([
	"first/project/First_Project/controller/BaseController",
	"first/project/First_Project/model/constants",
	"sap/ui/model/json/JSONModel"

], function (BaseController, Constants, JSONModel) {
	"use strict";

	return BaseController.extend("first.project.First_Project.controller.App", {
		onInit: function () {
			var oConstantsModel = new JSONModel(Constants); 
			this.getOwnerComponent().setModel(oConstantsModel, "constants");
		}
	});
});