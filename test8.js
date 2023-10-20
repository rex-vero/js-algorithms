let readlineSync = require('readline-sync');
let binary = parseInt(readlineSync.question('binary number: '));
console.log('decimal: ', parseInt(binary, 2));
