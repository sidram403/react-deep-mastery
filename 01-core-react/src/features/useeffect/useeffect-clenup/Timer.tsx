import React, { useState, useEffect } from "react";

/**
 * Timer Component
 *
 * Demonstrates:
 * - Side effects using setInterval
 * - Importance of cleanup function
 *
 * Model:
 * - Effects run after commit phase
 * - Cleanup runs:
 *  1. Before effect re-runs
 *  2. On component unmount
 */
function Timer(): React.ReactElement {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    console.log("Effect: Timer started");

    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("Seconds:", seconds);
    }, 1000);

    /**
     * Cleanup function
     *
     * This prevents:
     * - Memory leaks
     * - Duplicates intervals
     * - Side effects persisting after unmount
     */
    return () => {
      console.log("Cleanup: Clearing interval");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <strong>Seconds:</strong> {seconds}
    </div>
  );
}

export default Timer;
