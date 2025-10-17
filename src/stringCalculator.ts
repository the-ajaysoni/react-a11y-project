import type { Dispatch, SetStateAction } from "react";

const calculateString = ({
  input,
  setResult,
}: {
  input: string;
  setResult: Dispatch<SetStateAction<number | null>>;
}): void => {
  if (input.trim() === "") {
    setResult(0);
    return;
  }

  const numbers = input
    .split(/[\n,]+/)
    .map((num) => num.trim())
    .map(Number);

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error("Negative numbers not allowed: " + negatives.join(", "));
  }

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  setResult(sum);
};

export default calculateString;
