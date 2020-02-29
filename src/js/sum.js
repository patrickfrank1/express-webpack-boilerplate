/**
 * Compute the sum of two numbers.
 * @param {number} a First number
 * @param {number} b Secund number
 */
const sum = (a, b) => {
  return a + b;
};

function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

const multiplyByFour = async function multiplyByFour(a) {
  const b = await resolveAfter2Seconds(4);
  return a * b;
};

module.exports.sum = sum;
module.exports.multiplyByFour = multiplyByFour;
