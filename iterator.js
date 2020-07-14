const base = {value: 5};

const makeHistory = (days) => (Array(days).fill(base));

const history = makeHistory(5);

const reducer = (acumulator, currentVal) => (acumulator + currentVal.value);
const iterator = (history) => (history.reduce(reducer, 0));

console.log(history);
// [ { value: 5 },
//   { value: 5 },
//   { value: 5 },
//   { value: 5 },
//   { value: 5 } ]
console.log(iterator(history));
// 25
