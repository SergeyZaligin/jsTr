(function (global) {
	'use strict';

	const App = global.App;
	const Truck = App.Truck;
	const DataStore = App.DataStore;
	const FORM_SELECTOR = '[data-coffee-order="form"]';
  const FormHandler = App.FormHandler;
  let formHandler = new FormHandler(FORM_SELECTOR);

	const myTruck = new Truck('ncc-1701', new DataStore());

	formHandler = new FormHandler(FORM_SELECTOR);
	formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
	console.log(formHandler);

	global.myTruck = myTruck;

})(window);
