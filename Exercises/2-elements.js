'use strict';

const removeElements = (array, ...items) => {

  for(const key of items)
  {
    const value = array.indexOf(key);
    if(value !== -1) array.splice(value, 1);
  }
};

module.exports = { removeElements };
