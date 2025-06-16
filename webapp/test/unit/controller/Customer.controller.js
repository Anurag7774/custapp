/*global QUnit*/

sap.ui.define([
	"comarvcust/custapp/controller/Customer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Customer Controller");

	QUnit.test("I should test the Customer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
