import React, { useEffect, useState } from "react";

/**
 * useEffect Stale Closure Demonstration
 *
 * Demonstrates:
 * - How closures capture stale state
 * - why dependency array matters
 *
 * Insight:
 * - useEffect callback captures variables
 *   from the render in which it was created.
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Render - stale closure demo");

  /**
   * This effect runs only once(mount).
   * But it captures the initial value of 'count'.
   *
   * Therefore, interval callback always sees count = 0.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Logged Count:", count);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section style={{ padding: "2rem", border: "1px solid teal" }}>
      <h2>useEffect Stale closure</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </section>
  );
}

export default Parent;
