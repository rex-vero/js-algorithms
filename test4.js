let readlineSync = require('readline-sync');
let number = readlineSync.question('Enter a number: ')
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i * (i + 1);
}
console.log(sum);