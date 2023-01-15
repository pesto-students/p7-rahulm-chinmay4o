const mathOperations = require("./index");

test("add 2 numbers", () => {
  //given
  const a = 3, b = 4;
  //when
  const result = mathOperations.sum(a, b);
  //then
  expect(result).toBe(7);
  // expect(mathOperations.sum(3, 4)).toBe(7);
});

test("subtract 2 numbers", () => {
  expect(mathOperations.diff(6, 1)).toBe(5);
});

test("multiply 2 numbers", () => {
  expect(mathOperations.product(3, 4)).toBe(12);
});
