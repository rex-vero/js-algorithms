let readlineSync = require('readline-sync');
let despointAndWithdrawal = parseInt(readlineSync.question('Enter 0 for despoint & 1 for withdrawal: '));
const bankInfo = {
    name: 'rex vero',
    holding: 10000000,
    resort: 15,
    despoint: 100282,
    withdrawal: 6354,
}
switch (despointAndWithdrawal) {
    case 0:
        console.log(`name: ${bankInfo.name} , holding: $${bankInfo.holding} , resort: ${bankInfo.resort} times , despoint: $${bankInfo.despoint}`);
        break;

    case 1:
        console.log(`name: ${bankInfo.name} , holding: $${bankInfo.holding} , resort: ${bankInfo.resort} times , withdrawal: $${bankInfo.withdrawal}`);
        break;
    default:
        console.log('I said 0 or 1 you idiot >:( ');
        break;
}
