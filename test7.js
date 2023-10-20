let readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question('first number: '));
let num2 = parseInt(readlineSync.question('second number: '));
for (let i = num1 + 3; i <= num2; i += 3) {
    console.log(i);
}
