export function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

export function timeout(duration: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(duration);
    }, duration);
  });
}
