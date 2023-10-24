let readlineSync = require('readline-sync');
let number = readlineSync.question('Enter a number: ')
let even = 0;
let odd = 0;
let zero = 0;
for (let digits of number) {
    if (digits % 2 == 0) {
        even++;
    }
    if (digits % 2 == 1) {
        odd++;
    }
    if (digits == 0) {
        zero++;
    }
}
console.log('number of even numbers:',even - zero);
console.log('number of odd numbers:',odd);
console.log('number of zeros:',zero);