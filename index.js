
function sum(fromN, toN) {
  let N = fromN;
  if (N === toN) {
    return N;
  }
  return N + sum(N + 1, toN);
}

module.exports = sum;
