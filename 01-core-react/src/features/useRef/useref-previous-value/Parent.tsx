import React, { useEffect, useRef, useState } from "react";

/**
 * useRef - Previous Value Tracking
 *
 * Demonstrates:
 * - How to store previous state value
 * - Why ref is perfect for this use case
 *
 * Model:
 * - Ref persists across renders
 * - Updating ref does NOT trigger re-render
 * - Effect runs AFTER render commit
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  /**
   * Ref to store previous value.
   * Initial value is undefined.
   */
  const previousCountRef = useRef<number | undefined>(undefined);

  /**
   * After render commit
   * update ref to current count.
   *
   * This ensures:
   * - During render, ref contains previous value
   * - After commit, ref updates
   */
  useEffect(() => {
    previousCountRef.current = count;
  }, [count]);

  console.log("Render - previous value demo");

  return (
    <section style={{ padding: "2rem", border: "1px solid pink" }}>
      <h2>useRef - Track Previous Value</h2>

      <p>
        <strong>Current Value:</strong> {count}
      </p>

      <p>
        <strong>Previous Count:</strong> {previousCountRef.current ?? "None"}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </section>
  );
}

export default Parent;
