'use strict';

const removeElement = (array, item) => {
  const value = array.indexOf(item);
  if (value !== -1) array.splice(value, 1);
};

module.exports = { removeElement };
