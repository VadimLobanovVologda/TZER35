'use strict';
console.log('\n================================================');
console.log('Task 2 - Алгоритмы');

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
      .map((sidesCooked, indexFryingPan) => {
        if (indexFryingPan < numberFryingPan) {
          return sidesCooked + 1;
        }
        return sidesCooked;
      })
      .sort();
    return cookingTime(newPancakes, numberIterations + 1);
  }
  return numberIterations;
};

console.log(
  `Cooking time ${numberPancake} pancakes in ${numberFryingPan} frying pans =`,
  cookingTime(pancakes),
  'min'
);

/*
Изначально у нас есть 3 блинчика с 2 сторонами и 2 сковороды. (массив из 3 "блинчиков" со значением количества обжаренных сторон - изначално 0, 2 - "приготовлен")
Так как мы не можем жарить одновременно две стороны одного блинчика, то во избежание ситуации, когда число блинчиков нечетное
и в конце остается жариться 1 блинчик, необходимо на каждой итерации жарить наименее прожареные блинчики.
Т.е. если у меня 3 блинчика, то сначала я пожарю с одной стороны два блинчика,
далее пожарю одну сторону еще не пожаренного блинчика и дожарю один из предыдущих,
в конце я дожарю не прожаренные стороны оставшихся двух блинчиков.
*/
