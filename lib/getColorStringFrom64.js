'use strict';

const getIntegerFromString = require('./getIntegerFromString');

const colors = {
  rgb: [
  ],
  hsl: [
  ],
};

module.exports = function getColorStringFrom64() {
  const selection = getIntegerFromString(63, this.base);

  return colors[this.colorModel][selection];
};
