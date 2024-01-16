import { expect, test, describe, it } from "vitest";
import { add } from "../src/utils/add";
import { mul } from "../src/utils/mul";

describe("Simple Functions Tests", () => {
  it("Add numbers function works fine", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(3, 5)).toBe(8);
    expect(add(11, 23)).toBe(34);
  });
  it("Miltiplications function works fine", () => {
    expect(mul(1, 2)).toBe(2);
    expect(mul(3, 5)).toBe(15);
    expect(mul(12, 10)).toBe(120);
  });
});
