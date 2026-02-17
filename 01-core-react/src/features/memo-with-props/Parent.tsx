import React, { useState } from "react";
import Child from "./Child";

/**
 * PArent Component
 *
 * Demonstrates why React.memo fails
 * when passing inline object props
 */

function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Parent Rendered - memo-with-props");

  return (
    <section style={{ padding: "2rem", border: "1px solid gray" }}>
      <h2>React.memo with Object Props</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      {/*
        Inline object creation.
        This creates NEW reference on every render
        React.memo shallow comparison fails.
      */}
      <Child config={{ theme: "dark" }} />
    </section>
  );
}

export default Parent;
