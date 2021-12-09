const removeFromArray = function (arr, ...itemsToRemove) {
    return arr.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
