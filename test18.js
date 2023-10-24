let readlineSync = require('readline-sync');
let num1 = parseInt(readlineSync.question('first number: '));
let num2 = parseInt(readlineSync.question('second number: '));
let str = readlineSync.question('chose your operator(+ , - , * , % , / , **): ')
if (str === '+') {
    console.log('result=', num1 + num2);
} else if (str === '-') {
    console.log('result=', num1 - num2);
} else if (str === '/') {
    console.log('result=', num1 / num2);
} else if (str === '%') {
    console.log('result=', num1 % num2);
} else if (str === '*') {
    console.log('result=', num1 * num2);
} else if (str === '**') {
    console.log('result=', num1 ** num2);
}