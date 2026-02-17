import React, { useEffect, useState } from "react";

/**
 * useEffect Depenedency Trap
 *
 * Demonstrates:
 * - How incorrect dependency usage
 *   can cause infinite re-render loops.
 *
 * Insight:
 * - State updates inside effect trigger re-render.
 * - If dependendy causes effect to run again, loop occurs.
 */
function Parent(): React.ReactElement {
  const [count, setCount] = useState<number>(0);

  console.log("Render - useeffect-dependency-trap");

  /**
   * Problematic Effect
   *
   * Runs whenever 'count' changes.
   * Inside effect we update count again.
   *
   * This creates:
   * Render -> Effect -> setState -> Render -> Effect -> ...
   */
  //   useEffect(() => {
  //     if (count < 3) {
  //       setCount(count + 1);
  //     }
  //   }, [count]);

  /**
   * Correct Pattern to avoid dependency-trap
   * If you want to initialize state,
   * use empty dependency array.
   */
  useEffect(() => {
    setCount(3);
  }, []);

  return (
    <section style={{ padding: "2rem", border: "1px solid red" }}>
      <h2>useEffect Dependency Trap</h2>

      <p>
        <strong>Count:</strong> {count}
      </p>
    </section>
  );
}

export default Parent;
