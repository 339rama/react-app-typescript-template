const getNumberArray = (from: number, to: number): number[] => {
  if (to < 1) to = 1;
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
};

export default getNumberArray;
