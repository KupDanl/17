var Converter = require('./converter');
var currentDate = require('./rates');

var converter = new Converter();

console.log("Date: " + currentDate + "\n");

console.log("100 Dollars rate to Hryvna: " + converter.convertToUSD(100));
console.log("100 Euros rate to Hryvna: " + converter.convertToEUR(100));
console.log("100 Rubles rate to Hryvna: " + converter.convertToRUR(100) + "\n");

