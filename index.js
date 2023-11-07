const sieveOfEratosthenes = (limit) => {
  const output = new Array(limit + 1).fill(true);
  output[0] = false;
  output[1] = false;

  for (let i = 2; i <= limit; i++) {
    if (output[i] === true) {
      for (let j = i * 2; j <= limit; j = j + i) {
        output[j] = false;
      }
    }
  }

  return output;
};

const findTrueIndices = (arr) => {
  const out = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      out.push(i);
    }
  }

  return out;
};

//test value
const test = findTrueIndices(sieveOfEratosthenes(200));
console.log(test);
