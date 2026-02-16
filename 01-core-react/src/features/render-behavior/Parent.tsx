import React, { useState } from "react";
import Child from "./Child";

/**
 * Parent Component
 *
 * Holds state and triggers re-renders
 * Used to visualize React's render propagation behavior
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState(0);

  console.log("Parent Rendered");

  return (
    <section style={{ padding: "2rem" }}>
      <h2>Render Behavior Demo</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      {/*
              Functional update prevents stale state issues.
              Always preferred in production for state derived from previous state.  
            */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <Child />
    </section>
  );
}

export default Parent;
