'use strict';
console.log('\n================================================');
console.log('Task 4 - Рефакторинг');

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

const newDrawRating = (vote) =>
  [...new Array(5)]
    .map((_, starIndex) => starIndex > (Math.floor(vote / 21) ? '★' : '☆'))
    .join('');

// Проверка работы результата
console.log(drawRating(0)); // ★☆☆☆☆
console.log(drawRating(1)); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
