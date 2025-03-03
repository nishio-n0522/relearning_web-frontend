import { timeout, wait } from ".";

test("指定時間待つと、経過時間をもってresolveされる1", () => {
  return wait(50).then((duration) => {
    expect(duration).toBe(50);
  });
});

test("指定時間待つと、経過時間をもってresolveされる2", () => {
  return expect(wait(50)).resolves.toBe(50);
});

test("指定時間待つと、経過時間をもってresolveされる3", async () => {
  await expect(wait(50)).resolves.toBe(50);
});

test("指定時間待つと、経過時間をもってresolveされる4", async () => {
  expect(await wait(50)).toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる5", () => {
  return timeout(50)
    .then((res) => {
      expect(res).toBe(50);
    })
    .catch((err) => {
      expect(err).toBe(40);
    });
});

test("指定時間待つと、経過時間をもってrejectされる6", () => {
  return expect(timeout(50)).rejects.toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる7", async () => {
  await expect(timeout(50)).rejects.toBe(50);
});

test("指定時間待つと、経過時間をもってrejectされる8", async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (error) {
    expect(error).toBe(50);
  }
});

test("指定時間待つと、経過時間をもってrejectされる9", async () => {
  expect.assertions(1);
  try {
    await wait(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});
