import React, { useEffect, useState } from "react";

/**
 * useEffect Basics Demonstration
 *
 * This moddule demonstrates:
 * 1. Effect without dependency array
 * 2. Effect with empty dependency array
 * 3. Effect with specific dependency
 *
 * Model:
 * - useEffect runs AFTER render commit.
 * - It does NOT block rendering.
 * - It runs asynchronously after DOM paint.
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Render Phase Executed");

  /**
   * Effect without dependency array
   *
   * Runs : After every render
   */
  useEffect(() => {
    console.log("Effect without dependency array");
  });

  /**
   * Effect with empty dependency array
   *
   * Runs : Only once after initial mount
   */
  useEffect(() => {
    console.log("Effect with empty dependency array (mount only)");
  }, []);

  /**
   * Effect with specific dependency
   *
   * Runs:
   * - After initial mount
   * - Whenever 'count' changes
   */
  useEffect(() => {
    console.log("Effect with count dependency", count);
  }, [count]);

  return (
    <section style={{ padding: "2rem", border: "1px solid purple" }}>
      <h2>useEffect Basics</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </section>
  );
}

export default Parent;
