let readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question('first number: '));
let num2 = parseInt(readlineSync.question('second number: '));
let num3 = parseInt(readlineSync.question('third number: '));
let num4 = parseInt(readlineSync.question('foured number: '));
if (num1 > (num3 + num4)) {
    console.log('result: ', num1 * num3);
} else {
    console.log('result: ', num2 * num4);
}