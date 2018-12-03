const {day1: input } = require('./data');
const part1 = (input) => {
  let splitInput = input.split('\n');
  let output = splitInput
  .reduce((sum, cur) => sum + Number(cur), 0);

  return output;
}
const part2 = (input) => {
  let splitInput = input.split('\n');
  let history = new Set([0]);
  let currentFrequency = 0;
  let idx = 0;
  let firstMatch = undefined;

  while (firstMatch == undefined) {
    currentFrequency += Number(splitInput[idx]);
    if (history.has(currentFrequency)) {
      // this is the first match
      firstMatch = currentFrequency;
    } else {
      history.add(currentFrequency);
    }
    idx = (idx + 1 >=splitInput.length) ? 0 : idx + 1
  }
  return firstMatch;
}

console.log('Part 1 output:', part1(input));
console.log('Part 2 output:', part2(input));
