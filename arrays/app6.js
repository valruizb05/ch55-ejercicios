/**Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`. */



function positive(arr) {
  const positives = arr.filter(num => num > 0);
  return positives.length > arr.length / 2;
}

console.log(positive([-1, -3, -5, 4, 6767])); // false
console.log(positive([1, 2, 3, -1]));         // true
