let readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question('first number: '));
let num2 = parseInt(readlineSync.question('second number: '));
for (let i = num1; i <= num2; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}