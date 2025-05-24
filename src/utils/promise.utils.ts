/**
 * Creates a promise that resolves or rejects after a specified delay
 * @param delayMs - The delay in milliseconds before the promise settles (default: 3000)
 * @param rejectPercentage - The percentage chance (0-100) of the promise rejecting instead of resolving (default: 0)
 * @returns A promise that resolves after the specified delay, or rejects based on the rejectPercentage
 */
export function createDelayedPromise(
  delayMs: number = 1000,
  rejectPercentage: number = 0
): Promise<void> {
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
