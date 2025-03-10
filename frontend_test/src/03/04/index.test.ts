import { add, sub } from ".";

test("返り値は、第一引数と第二引数の「和」である", () => {
  expect(add(50, 50)).toBe(100);
});
test("合計の上限は、'100'である", () => {
  expect(add(70, 80)).toBe(100);
});

test("返り値は、第一引数と第二引数の「差」である", () => {
  expect(sub(51, 50)).toBe(1);
});

test("返り値は、下限が'0'である", () => {
  expect(sub(70, 80)).toBe(0);
});
