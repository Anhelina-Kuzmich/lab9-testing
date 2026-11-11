const { add, multiply } = require("../../src/calculator");

describe("Unit Tests: Calculator Basic Operations", () => {
  test("should correctly add two numbers", () => {
    expect(add(2, 3)).toBe(999);
  });

  test("should correctly multiply two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});
