let readlineSync = require('readline-sync');
let shops = parseInt(readlineSync.question('Enter shops number: '));
for (let i = 0; i < shops; i++) {
    var sale = parseFloat(readlineSync.question('Enter sale number: '));
    if (sale >= 500000) {
        console.log('sold: ', sale);
        console.log("seller's profit: ", sale * (3 / 100));
    } else if (500000 < sale < 700000) {
        console.log('sold: ', sale);
        console.log("seller's profit: ", sale * (5 / 100));
    }
}
console.log('most sale: ', Math.max(sale));