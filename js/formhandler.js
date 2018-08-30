(function (global) {
  'use strict';
  const App = global.App || {};
  const $ = global.jQuery;
  const defaultRange = $('[type="range"]').val();
  const rangeValue = $('#rangeValue');
  const modalSuperForm = $('#superModal');

  compareRange(defaultRange, rangeValue);

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
      if (data.strength > 81) {
        modalSuperForm.modal({
          show: true
        });
      }
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  function compareRange (range, elem) {
    if (range <= 30) {
      elem.css('color', 'green');
    } else if (range >= 31 && range <= 80) {
      elem.css('color', 'yellow');
    } else if (range > 81) {
      elem.css('color', 'red');
    }
  }

  FormHandler.prototype.addRangeHandler = function () {

    rangeValue.text(defaultRange);

    $('[type="range"]').on('change', function (event) {
      let levelStrength = event.target.value;
      rangeValue.text(levelStrength);
      compareRange(levelStrength, rangeValue);
    });

  };

  App.FormHandler = FormHandler;
  global.App = App;

})(window);
