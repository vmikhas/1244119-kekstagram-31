const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomIdFromRangeGenerator = (a, b) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomNumber(a, b);
    if (previousValues.length >= (b - a + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(a, b);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export { getRandomNumber, getRandomIdFromRangeGenerator };
