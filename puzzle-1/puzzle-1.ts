import * as path from 'path'
import * as fs from 'fs'

const inputFile = path.join(__dirname, 'input.txt');

let total = 0

// Read the input file and split into lines
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split('\n');
  lines.map((line) => {

    // split the line into array of characters
    const chars = line.split('');

    // get all numbers from the array chars
    const numbers = chars.filter((char) => !isNaN(parseInt(char, 10)));
    console.log(numbers);

    if (numbers.length === 0) {
      // no numbers found in the line
      return;
    }

    // get first and last number
    const first = numbers[0]
    const last = numbers[numbers.length - 1]

    const number = parseInt(`${first}${last}`, 10);

    console.log(number);

    total = total + number;

  })

  console.log(`Total: ${total}`);
});

