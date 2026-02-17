import React, { useState } from "react";
import Timer from "./Timer";

/**
 * Parent Component
 *
 * Allows mounting and unmounting Timer
 * to observe cleanup behavior.
 */
function Parent(): React.ReactElement {
  const [showTimer, setShowTimer] = useState<boolean>(true);

  return (
    <section style={{ padding: "2rem", border: "1px solid orange" }}>
      <h2>useEffect Cleanup Demonstration</h2>

      <button onClick={() => setShowTimer((prev) => !prev)}>
        Toggle Timer
      </button>

      {showTimer && <Timer />}
    </section>
  );
}

export default Parent;
