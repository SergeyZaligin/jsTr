(function (global) {
  'use strict';
  const App = global.App || {};
  const $ = global.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function (fn) {
    this.$formElement.on('submit', function (event) {
      event.preventDefault();
      const data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addRangeHandler = function () {
    $('[type="range"]').on('change', function (event) {
      let levelStrength = event.target.value;
      if (levelStrength <= 30) {

      } else if (levelStrength >= 31 && levelStrength <= 80) {

      } else if (levelStrength < 80) {

      }
    });
  };

  App.FormHandler = FormHandler;
  global.App = App;

})(window);
