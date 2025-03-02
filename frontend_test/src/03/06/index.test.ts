test("「真の値」の検証", () => {
  expect(1).toBeTruthy();
  expect("1").toBeTruthy();
  expect(true).toBeTruthy();
  expect(0).toBeTruthy();
  expect("").toBeTruthy();
  expect(false).toBeTruthy();
});

test("「偽の値」の検証", () => {
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeFalsy();
  expect("1").toBeFalsy();
  expect(true).toBeFalsy();
});

test("「null, undefined」の検証", () => {
  expect(null).toBeFalsy();
  expect(undefined).toBeFalsy();
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(undefined).not.toBeUndefined();
});

describe("数値の検証", () => {
  const value = 2 + 2;
  test("検証値は期待値と等しい", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test("検証値は期待値より大きい", () => {
    expect(value).toBeGreaterThan(4);
    expect(value).toBeGreaterThanOrEqual(4);
  });
  test("検証値は期待値より小さい", () => {
    expect(value).toBeLessThan(4);
    expect(value).toBeLessThanOrEqual(4);
  });
});

test("小数計算は正確ではない", () => {
  const value = 0.1 + 0.2;
  console.log(value);
  expect(value).not.toEqual(0.3);

  expect(value).toBeCloseTo(0.3);
  expect(value).toBeCloseTo(0.3, 15);
  expect(value).toBeCloseTo(0.3, 16);
});

const str = "こんにちは世界";
const obj = { status: 200, message: str };

test("検証値は期待値と等しい", () => {
  expect(str).toBe("こんにちは世界");
  expect(str).toEqual("こんにちは世界");
});
test("toContain", () => {
  expect(str).toContain("世界");
  expect(str).not.toContain("さようなら");
});
test("toMatch", () => {
  expect(str).toMatch("こんにちは世界");
  expect(str).toMatch("/さようなら/");
});

test("toHaveLength", () => {
  expect(str).toHaveLength(7);
  expect(str).not.toHaveLength(7);
});

test("stringContaining", () => {
  expect(obj).toEqual({
    status: 200,
    message: expect.stringContaining("世界"),
  });
});

test("stringMatching", () => {
  expect(obj).toEqual({
    status: 200,
    message: expect.stringMatching("世界"),
  });
});

const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];
test("toContain", () => {
  expect(tags).toContain("Jest");
  expect(tags).toHaveLength(5);
});

const article1 = { author: "taro", title: "Testing Next.js" };
const article2 = { author: "jiro", title: "Storybook play function" };
const article3 = { author: "hanako", title: "Visual Regression Testing" };
const articles = [article1, article2, article3];
test("toContainEqual", () => {
  expect(articles).toContainEqual(article1);
});
test("arrayContaining", () => {
  expect(articles).toEqual(expect.arrayContaining([article1, article2]));
});

const author = { name: "taroyamada", age: 28 };
test("toMatchObject", () => {
  expect(author).toMatchObject({ name: "taroyamada", age: 28 });
  expect(author).toMatchObject({ name: "taroyamada" });
  // expect(author).toMatchObject({ gender: "man" });
});

test("toHaveProperty", () => {
  expect(author).toHaveProperty("name");
  expect(author).toHaveProperty("name");
});

const article = {
  title: "Testing with Jest",
  author: { name: "taroyamada", age: 38 },
};

test("objectContaining", () => {
  expect(article).toEqual({
    title: "Testing with Jest",
    author: expect.objectContaining({ name: "taroyamada" }),
  });
  expect(article).toEqual({
    title: "Testing with Jest",
    author: expect.not.objectContaining({ gender: "man" }),
  });
});
