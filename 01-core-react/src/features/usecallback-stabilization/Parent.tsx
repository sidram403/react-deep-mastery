import React, { useCallback, useState } from "react";
import Child from "./Child";

/**
 * Parent Component
 *
 * useCallabck stabilizes function reference
 * across renders.
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Parent Rendered - useCallback stabilization");

  /**
   * useCallback memoizes function reference.
   * Since dependency array is empty,
   * function is created only once.
   */
  const handleChildAction = useCallback((): void => {
    console.log("Child clicked");
  }, []);

  return (
    <section style={{ padding: "2rem", border: "1px solid green" }}>
      <h2>useCallback Demonstration</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>

      <Child onAction={handleChildAction} />
    </section>
  );
}

export default Parent;
