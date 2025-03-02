import { add, HttpError, RangeError } from ".";

test("合計の上限は、'100'である", () => {
  expect(() => add(-10, 110)).toThrow(HttpError);
  expect(() => add(-10, 110)).toThrow(RangeError);
  expect(() => add(-10, 110)).toThrow(Error);
});
