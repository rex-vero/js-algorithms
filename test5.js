let readlineSync = require('readline-sync');
let income = readlineSync.question('income: ')
if (income < 50000) {
    console.log('tax free');
} else if (50000 <= income < 100000) {
    let tax1 = 50000 * (10 / 100)
    console.log('with 10% tax: ', income - tax1);
} else if (income > 100000) {
    let tax2 = 100000 * (15 / 100)
    console.log('with 15% tax: ', income - tax2);
}