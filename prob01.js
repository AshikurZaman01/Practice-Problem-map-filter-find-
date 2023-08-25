// you have an odd array (array with odd numbers). [1,3,5,7,9]. now convert this array into an even array (array with even numbers) 
// [2,4,6,8,10]. do this using for loop and array.map() method.
// Hints : add one to any odd numbers and it will become an even number.
 
const odd_numbers = [1,3,5,7,9];

const evenNum = [];

// Using a for loop to convert odd numbers to even
for (const x of odd_numbers) {
    const ev = x+1;
    evenNum.push(ev);
}
console.log(evenNum);

// Using array.map() to convert odd numbers to even
const evenUsingMap = odd_numbers.map((x) => x+1);
console.log(evenUsingMap);
