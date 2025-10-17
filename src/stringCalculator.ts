const calculateString = (input: string): number => {
  if (input.trim() === "") {
    return 0;
  }

  const numbers = input
    .split(/[\n,]+/)
    .map((num) => num.trim())
    .map(Number);

  const negatives = numbers.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error("Negative numbers not allowed: " + negatives.join(", "));
  }

  if (numbers.some(isNaN)) {
    throw new Error("Input contains invalid numbers");
  }

  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export default calculateString;
