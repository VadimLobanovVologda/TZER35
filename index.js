'use strict';

const dscount = (str, s1, s2) => {
  const lowString = str.toLowerCase();

  const { count: matchCounter } = [...lowString].reduce(
    (acc, element, index) => {
      const { previous, count } = acc;

      if (index > 0 && previous === s1 && element === s2) {
        return { previous: element, count: count + 1 };
      }
      return { ...acc, previous: element };
    },
    { previous: s1, count: 0 }
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
