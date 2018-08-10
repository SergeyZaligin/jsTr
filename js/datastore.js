(function (global) {
	'use strict';
	
	const App = global.App || {};

	function DataStore() {
		//console.log('Running...');
		this.data = {};
	}

	DataStore.prototype.add = function(key, val) {
		this.data[key] = val;
	};

	DataStore.prototype.get = function (key) {
		return this.data[key];
	};

	DataStore.prototype.getAll = function() {
		return this.data;
	};

	DataStore.prototype.remove = function (key) {
		delete this.data[key]
	}

	App.DataStore = DataStore;
	global.App = App;

})(window);