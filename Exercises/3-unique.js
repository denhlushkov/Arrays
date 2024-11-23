'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const data = [];
    for(const key of array)
    {
        if(!data.includes(key))
        {
            data.push(key);
        }
    }
    return data;
};

module.exports = { unique };
