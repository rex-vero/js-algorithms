const var1 = (name = 'rex vero') => {
    let str = 'Hello, ' + name + ' *-*!';
    return str;
}
let result = var1();
console.log(result);