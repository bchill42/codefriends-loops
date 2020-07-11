let sum = 0;
for (i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum = sum + i;
    }
}
console.log(`The sum of numbers between 0-1000 and are multiples of 3 or 5 is ${sum}`);