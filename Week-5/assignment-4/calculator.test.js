const mathOperations = require("./index");

test("add 2 numbers", () => {
  expect(mathOperations.sum(3, 4)).toBe(7);
});

test("subtract 2 numbers", () => {
  expect(mathOperations.diff(6, 1)).toBe(5);
});

test("multiply 2 numbers", () => {
  expect(mathOperations.product(3, 4)).toBe(12);
});
