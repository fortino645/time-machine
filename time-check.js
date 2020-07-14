const today = new Date();

const base = {value: 5, date: today};

const buildBase = (_, i) => ({...base, date: (new Date()).setDate(today.getDate() - i)});
const makeHistory = (days) => (Array(days).fill(0).map(buildBase));

const history = makeHistory(5);

const reducer = (acumulator, currentVal) => (acumulator + currentVal.value);


const iterator = (history, until) => (history.filter(e => e.date < until).reduce(reducer, 0));

console.log(history);
// [ { value: 5, date: 1594759802272 },
//   { value: 5, date: 1594673402273 },
//   { value: 5, date: 1594587002273 },
//   { value: 5, date: 1594500602273 },
//   { value: 5, date: 1594414202273 } ]

const daysAgo = (i) => ((new Date()).setDate(today.getDate() - i));
console.log(iterator(history, daysAgo(1)));
// 20
