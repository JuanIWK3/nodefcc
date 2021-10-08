import { readFileSync, writeFileSync } from 'fs';

const first = readFileSync('./content/first.txt');
const second = readFileSync('./content/second.txt');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
)
