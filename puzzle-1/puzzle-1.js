"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var inputFile = path.join(__dirname, 'input.txt');
var total = 0;
// Read the input file and split into lines
fs.readFile(inputFile, 'utf8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    var lines = data.split('\n');
    lines.map(function (line) {
        // split the line into array of characters
        var chars = line.split('');
        // get all numbers from the array chars
        var numbers = chars.filter(function (char) { return !isNaN(parseInt(char, 10)); });
        console.log(numbers);
        if (numbers.length === 0) {
            // no numbers found in the line
            return;
        }
        // get first and last number
        var first = numbers[0];
        var last = numbers[numbers.length - 1];
        var number = parseInt("".concat(first).concat(last), 10);
        console.log(number);
        total = total + number;
    });
    console.log("Total: ".concat(total));
});
