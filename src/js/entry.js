require("regenerator-runtime/runtime"); // babel dependency needed to compile
const op = require('./sum.js');
require('../css/main.scss');

op.multiplyByFour(4)
  .then((res) => {
    console.log(op.sum(1, 4));
    document.body.innerHTML += `sum: ${op.sum(1, 4)} and multiply: ${res}`;
  });

console.log(globalHello);