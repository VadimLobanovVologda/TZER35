'use strict';

const dscount = (str, s1, s2) => {
  const lowString = str.toLowerCase();

  const { matchCounter } = [...lowString].reduce(
    (acc, element, index) => {
      const { previous, matchCounter } = acc;

      if (index > 0 && previous === s1 && element === s2) {
        return { previous: element, matchCounter: matchCounter + 1 };
      }
      return { ...acc, previous: element };
    },
    { previous: s1, matchCounter: 0 }
  );
  return matchCounter;
};

try {
  test(dscount, ['ab___ab__', 'a', 'b'], 2);
  test(dscount, ['___cd____', 'c', 'd'], 1);
  test(dscount, ['de_______', 'd', 'e'], 1);
  test(dscount, ['12_12__12', '1', '2'], 3);
  test(dscount, ['_ba______', 'a', 'b'], 0);
  test(dscount, ['_a__b____', 'a', 'b'], 0);
  test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
  test(dscount, ['aAa___', 'a', 'a'], 2);

  console.info('Congratulations! All tests passed.');
} catch (e) {
  console.error(e);
}

function test(call, args, count, n) {
  const r = call.apply(n, args) === count;
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw 'Test failed!';
}

// ==========================================================================
// Task 2

const numberPancake = 3;
const numberSidesPancake = 2;
const sidesCooked = 0;
const numberFryingPan = 2;

const pancakes = [...new Array(numberPancake)].map(() => sidesCooked);

const cookingTime = (pancakes, numberIterations = 0) => {
  const isNotCooked = pancakes.filter(
    (sidesCooked) => sidesCooked < numberSidesPancake
  ).length;

  if (isNotCooked) {
    const newPancakes = pancakes
      .map((sidesCooked, indexFryingPan) =>
        indexFryingPan < numberFryingPan ? sidesCooked + 1 : sidesCooked
      )
      .sort();
    return cookingTime(newPancakes, numberIterations + 1);
  }
  return numberIterations;
};

console.log(
  `Cooking time ${numberPancake} pancakes in ${numberFryingPan} pans =`,
  cookingTime(pancakes),
  'min'
);

/*
Изначально у нас есть 3 блинчика с 2 сторонами и 2 сковороды.
Так как мы не можем жарить одновременно две стороны одного блинчика, то во избежание ситуации, когда число блинчиков нечетное, 
и в конце остается жариться 1 блинчик, необходимо на каждой итерации жарить наименее прожареные блинчики.
Т.е. если у меня 3 блинчика, то сначала я пожарю с одной стороны два блинчика,
далее пожарю одну сторону еще не пожаренного блинчика и дожарю один из предыдущих,
в конце я дожарю не прожаренные стороны оставшихся двух блинчиков.
*/

// ==============================================================================================
// Task 3

// Функция находит индекс последнего символа из двух в строке (почему-то болше нуля, поэтому сделал от нулевого индекса)
// Данная функция также считает и строку, состоящую из пробелов, т.к. не было других условий.

const string = 'st ring';
const a = ' ';
const b = 's';

function lastIndex(s = '', a = '', b = '') {
  if (s.match(/^$/)) {
    return -1;
  }

  let i = s.length - 1;
  let index = -1;

  while (index === -1 && i >= 0) {
    //i >= 0 а было i > 0
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
  `In the line "${string}", the last index among "${a}" and "${b}" = `,
  lastIndex(string, a, b)
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
  `In the line "${string}", the last index among "${a}" and "${b}" = `,
  newLastIndex(string, a, b)
);

// ============================================================================
// Task 4

function drawRating(vote) {
  if (vote >= 0 && vote <= 20) {
    return '★☆☆☆☆';
  } else if (vote > 20 && vote <= 40) {
    return '★★☆☆☆';
  } else if (vote > 40 && vote <= 60) {
    return '★★★☆☆';
  } else if (vote > 60 && vote <= 80) {
    return '★★★★☆';
  } else if (vote > 80 && vote <= 100) {
    return '★★★★★';
  }
}

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★

// Если переписать функцию:

const newDrawRating = (vote) => {
  return [...new Array(5)]
    .map((_, index) => (Math.floor(vote / 21) < index ? '☆' : '★'))
    .join('');
};

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
