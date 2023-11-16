/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arra = []
    for(let i=0; i<arr.length; i++){
      arra.push(fn(arr[i],i))
    }
   return arra
};