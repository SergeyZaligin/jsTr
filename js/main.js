(function (global) {
	'use strict';

	const App = global.App;
	const Truck = App.Truck;
	const DataStore = App.DataStore;

	const myTruck = new Truck('ncc-1701', new DataStore());
	global.myTruck = myTruck;
	
})(window);