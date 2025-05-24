/**
 * Configuration options for creating a delayed promise
 */
export interface DelayedPromiseConfig {
  /** The delay in milliseconds before the promise settles (default: 1000) */
  delayMs?: number;
  /** The percentage chance (0-100) of the promise rejecting instead of resolving (default: 0) */
  rejectPercentage?: number;
}

/**
 * Creates a promise that resolves or rejects after a specified delay
 * @param config - Configuration options for the promise
 * @returns A promise that resolves after the specified delay, or rejects based on the rejectPercentage
 */
export function createDelayedPromise(
  config: DelayedPromiseConfig = {}
): Promise<void> {
  const { delayMs = 1000, rejectPercentage = 0 } = config;

  return new Promise((resolve, reject) => {
    // Ensure rejectPercentage is between 0 and 100
    const normalizedRejectPercentage = Math.max(
      0,
      Math.min(100, rejectPercentage)
    );

    // Generate a random number between 0 and 100
    const random = Math.random() * 100;

    setTimeout(() => {
      if (random < normalizedRejectPercentage) {
        reject(
          new Error(`Promise rejected (${normalizedRejectPercentage}% chance)`)
        );
      } else {
        resolve();
      }
    }, delayMs);
  });
}
