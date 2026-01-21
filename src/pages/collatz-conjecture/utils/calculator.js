const collatzSequence = (num) => {
  if (!num) {
    return;
  }
  const collatzArray = [];
  collatzArray.push(num);
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3;
      num += 1;
    }
    collatzArray.push(num);
  }

  return collatzArray;
};

export default collatzSequence;
