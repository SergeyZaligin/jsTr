(function (global) {
  'use strict';

  const App = global.App || {};
  const $ = global.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }

  }

  App.CheckList = CheckList;
  global.App = App;
  
})(window);
