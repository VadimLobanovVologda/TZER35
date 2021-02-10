'use strict';
console.log('\n================================================');
console.log('Task 3 - Рефакторинг');

// Функция находит индекс последнего символа из двух в строке (почему-то болше нуля, поэтому сделал от нулевого индекса)
// Данная функция также считает и строку, состоящую из пробелов, т.к. не было других условий.

const string = 'st ring';
const aChar = ' ';
const bChar = 's';

function lastIndex(s = '', a = '', b = '') {
  if (s.match(/^$/)) {
    return -1;
  }
  let i = s.length - 1;
  let index = -1;

  while (index === -1 && i >= 0) {
    // i > 0 изменил на i >= 0
    if (s.substring(i, i + 1) === a) {
      index = i;
      break;
    }
    if (s.substring(i, i + 1) === b) {
      index = i;
    }
    i = i - 1;
  }

  if (index !== -1) {
    return index;
  }
  return -1;
}

console.log(
  `In the line "${string}", the last index among "${aChar}" and "${bChar}" = `,
  lastIndex(string, aChar, bChar)
);

// Если переписать функцию

const newLastIndex = (s = '', a = '', b = '') => {
  if (s.match(/^$/)) {
    return -1;
  }
  return [...s].reduce((lastInd, char, index) => {
    if (char === a || char === b) {
      return index;
    }
    return lastInd;
  }, -1);
};
console.log(
  `In the line "${string}", the last index among "${aChar}" and "${bChar}" = `,
  newLastIndex(string, aChar, bChar)
);
