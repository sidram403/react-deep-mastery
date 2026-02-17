import React, { useMemo, useState } from "react";
import Child from "./Child";

/**
 * Parent Component
 *
 * Demonstrates how useMemo stabilizes
 * object references to prevent unnecessary re-renders.
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Parent Rendered - useMemo stabilization");

  /**
   * useMemo ensures the object reference
   * remains stable between renders
   * unless dependencies change.
   *
   * Since dependency array is empty,
   * this object is created only once.
   */
  const config = useMemo(
    () => ({
      theme: "dark",
    }),
    [],
  );

  return (
    <section style={{ padding: "2rem", border: "1px solid blue" }}>
      <h2>useMemo Object Stabilization</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <Child config={config} />
    </section>
  );
}

export default Parent;
