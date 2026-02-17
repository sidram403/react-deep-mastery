import React, { useState } from "react";
import Child from "./Child";

/**
 * Parent Component
 *
 * Holds state and triggers re-renders
 * Used to visualize React's render propagation behavior
 *
 * Purpose :
 * Demonstrate how even unrelated state changes
 * cause child re-renders
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  console.log("Parent Rendered");

  return (
    <section
      style={{
        padding: "2rem",
        backgroundColor: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Render Behavior Demo</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      {/*
              Functional update prevents stale state issues.
              Always preferred in production for state derived from previous state.  
      */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>

      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggel Theme
      </button>
      <Child />
    </section>
  );
}

export default Parent;
