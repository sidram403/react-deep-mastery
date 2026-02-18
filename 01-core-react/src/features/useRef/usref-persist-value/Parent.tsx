import React, { useRef, useState } from "react";

/**
 * useRef - Persist Value Demonstration
 *
 * Demonstrates:
 * - useRef can store mutable value
 * - updating ref.current does NOT trigger re-render
 *
 * Model:
 * - State -> triggers re-render
 * - Ref -> does NOT trigger re-render
 */
function Parent(): React.ReactElement {
  const [renderCount, setRenderCount] = useState<number>(0);

  /**
   * Mutable container.
   * This value persists between renders.
   */
  const mutableCounterRef = useRef<number>(0);

  console.log("Component Rendered");

  const incrementRef = (): void => {
    mutableCounterRef.current += 1;
    console.log("Ref Value:", mutableCounterRef.current);
  };

  return (
    <section style={{ padding: "2rem", border: "1px solid navy" }}>
      <h2>useRef - Persist Mutable Value</h2>

      <p>
        <strong>Render Count (state):</strong> {renderCount}
      </p>

      <button onClick={() => setRenderCount((prev) => prev + 1)}>
        Trigger Re-render
      </button>

      <button onClick={incrementRef} style={{ marginLeft: "1rem" }}>
        Increment Ref (No Re-render)
      </button>
    </section>
  );
}

export default Parent;
