// you are given an array say : [33,50,79,78,90,101,30]
// now return/get all the elements which are divisible by 10 using array.filter() method.

const arr = [33,50,79,78,90,101,30];

const output = arr.filter((x) => x % 10 == 0);

console.log(output)