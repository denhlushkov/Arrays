'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
    const diff = [];
    for(const key of array1)
    {
        if(!array2.includes(key))
        {
            diff.push(key);
        }
    }
    return diff;
};

module.exports = { difference };
