const randomNum = function(size) {
  const index = Math.floor(Math.random() * size);
  return index;
}

const getRandom = function(arr) {
  let size = arr.length || 0;
  return arr[randomNum(size)];
}

exports.randomNum = randomNum;
exports.getRandom = getRandom;
