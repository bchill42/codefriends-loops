// Challenge #1
// If we list all the whole numbers between 1 and 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
for (let i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum = sum + i;
    }
}
console.log(`The sum of numbers between 0-1000 and are multiples of 3 or 5 is ${sum}`);