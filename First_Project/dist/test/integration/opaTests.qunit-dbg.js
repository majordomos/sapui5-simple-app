/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"first/project/First_Project/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});