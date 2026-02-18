import React, { useState, useRef } from "react";

/**
 * useRef vs useState Comparison
 *
 * Demonstrates:
 * - State updates trigger re-render
 * - Ref updated do NOT trigger re-render
 *
 * Model:
 * - useState -> schedules update in React Fiber tree
 * - useRef -> mutable container outside render lifecycle
 */
function Parent(): React.ReactElement {
  /**
   * State value
   * Updating this will trigger reconciliation.
   */
  const [stateValue, setStateValue] = useState<number>(0);

  /**
   * Ref value
   * Updating this will NOT trigger re-render
   */
  const refValue = useRef<number>(0);

  /**
   * Render tracking
   */
  const renderCountRef = useRef<number>(0);
  renderCountRef.current += 1;

  console.log("Component Rendered");

  const incrementState = (): void => {
    setStateValue((prev) => prev + 1);
  };

  const incrementRef = (): void => {
    refValue.current += 1;
    console.log("Ref Value Updated:", refValue.current);
  };

  return (
    <section style={{ padding: "2rem", border: "1px solid black" }}>
      <h2>useRef vs useState</h2>

      <p>
        <strong>Render Count:</strong> {renderCountRef.current}
      </p>

      <hr />

      <p>
        <strong>State Value:</strong> {stateValue}
      </p>

      <button onClick={incrementState}>Increment State(Trigger Render)</button>

      <hr />

      <p>
        <strong>Ref Value:</strong> {refValue.current}
      </p>

      <button onClick={incrementRef} style={{ marginTop: "0.5rem" }}>
        Increment Ref (No Render)
      </button>
    </section>
  );
}

export default Parent;
