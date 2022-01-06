const roundDecimal = (n: number, decimalLen: number): number => {
  const factor = 10 ** decimalLen;
  const res = Math.round(n * factor);
  return res / factor;
};

export default roundDecimal;
