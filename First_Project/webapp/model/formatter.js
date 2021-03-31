sap.ui.define([
	"sap/base/strings/formatMessage",
], function(formatMessage) {
	"use strict";

	return{
		formatMessage: formatMessage,
		getCustomerDetailsTitle: function(companyName, contactName){
			return companyName || contactName;
		}
	};
});