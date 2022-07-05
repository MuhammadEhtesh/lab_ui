/*
* function to return type of objects
* @ref: https://stackoverflow.com/questions/23461253/javascript-type-comparison
*/
export const toType = function (obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase();
};
