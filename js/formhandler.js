(function (global) {
  'use strict';
  var App = global.App || {};
  var $ = global.jQuery;

  function FormHandler() {
    if (!selector) {
      throw new Error('No selector provided');
    }
  }

  App.FormHandler = FormHandler;
  global.App = App;

})(window);
