export function createSaga(): Promise<"done"> {
  return new Promise((res, rej) => {
    res("done");
  });
}
