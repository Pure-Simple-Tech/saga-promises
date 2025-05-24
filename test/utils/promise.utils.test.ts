import { assertEquals } from "https://deno.land/std@0.220.1/assert/mod.ts";
import { describe, it } from "jsr:@std/testing/bdd";
import { createDelayedPromise } from "../../src/utils/promise.utils.ts";

// TODO -> use fake timers to make tests run faster

describe("createDelayedPromise", () => {
  it("should resolve after default delay of 1000ms", async () => {
    const defaultDelay = 1000;
    const startTime = Date.now();

    await createDelayedPromise();

    const endTime = Date.now();
    const duration = endTime - startTime;

    assertEquals(
      duration >= defaultDelay - 100 && duration <= defaultDelay + 100,
      true,
      `Expected delay to be around 1000ms, but got ${duration}ms`
    );
  });

  it("resolves after custom delay", async () => {
    const customDelay = 1500;
    const startTime = Date.now();

    await createDelayedPromise({ delayMs: customDelay });

    const endTime = Date.now();
    const duration = endTime - startTime;

    assertEquals(
      duration >= customDelay - 100 && duration <= customDelay + 100,
      true,
      `Expected delay to be around ${customDelay}ms, but got ${duration}ms`
    );
  });
});
