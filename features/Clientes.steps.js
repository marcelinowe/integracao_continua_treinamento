const assert = require('assert');
const { Given, When, Then } = require('cucumber');

  Given('today is Sunday', function () {
    return 'success';
  });

  When('I ask whether it\'s Friday yet', function () {
    return 'success';
  });

  Then('I should be told {string}', function (string) {
    return 'success';
  });
