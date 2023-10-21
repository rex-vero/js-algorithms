let readlineSync = require('readline-sync');
let number = parseInt(readlineSync.question('Enter a number: '));
let sum = 0;
let count = 0;
if (number % 4 == 0) {
    for (let i = 4; i < number; i += 4) {
        console.log('multiple:', i);
        sum += i;
        count++;
    }
    console.log('sum:', sum);
    console.log('number of multiple(s):',count);
} else {
    console.log('your number is not multiple of 4');
}