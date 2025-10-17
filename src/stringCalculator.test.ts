import { beforeEach, describe, expect, test } from "vitest";
import calculateString from "./stringCalculator";

describe("calculateString", () => {
  let result: number | null;

  beforeEach(() => {
    result = null;
  });

  test("returns 0 for empty input", () => {
    result = calculateString("");
    expect(result).toBe(0);
  });

  test("sums comma-separated numbers correctly", () => {
    result = calculateString("1,2,3");
    expect(result).toBe(6);
  });

  test("sums newline-separated numbers correctly", () => {
    result = calculateString("1\n2\n3");
    expect(result).toBe(6);
  });

  test("handles mixed commas and newlines", () => {
    result = calculateString("1\n2,3");
    expect(result).toBe(6);
  });

  test("trims spaces around numbers", () => {
    result = calculateString(" 1 , 2 , 3 ");
    expect(result).toBe(6);
  });

  test("throws error when negative numbers are present", () => {
    expect(() => {
      result = calculateString("-1,2");
    }).toThrow("Negative numbers not allowed: -1");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => {
      result = calculateString("-1,-2,3");
    }).toThrow("Negative numbers not allowed: -1, -2");
  });
});
