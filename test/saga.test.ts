import { assertEquals } from "https://deno.land/std@0.220.1/assert/mod.ts";
import { describe, it } from "jsr:@std/testing/bdd";

import { createSaga } from "../src/saga.ts";

describe("createSaga function", () => {
  it("should return a promise", () => {
    const result = createSaga() as unknown;

    assertEquals(result instanceof Promise, true);
  });
});
