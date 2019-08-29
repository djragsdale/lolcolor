'use strict';

const getIntegerFromString = require('./getIntegerFromString');

const colors = {
  rgb: [
  ],
  hsl: [
  ],
};

module.exports = function getColorStringFrom256() {
  const selection = getIntegerFromString(255, this.base);

  return colors[this.colorModel][selection];
};
