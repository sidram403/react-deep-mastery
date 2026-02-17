import React, { memo } from "react";

/**
 * Child Component
 *
 * Receives a callback function as prop.
 * Wrapped in React.memo to prevent unnecessary re-renders.
 *
 * Important concept:
 * - Functions are reference types.
 * - New function reference = re-render.
 */
interface ChildProps {
  onAction: () => void;
}

function Child({ onAction }: ChildProps): React.ReactElement {
  console.log("Child Rendered - useCallback stabilization");

  return (
    <div>
      <button onClick={onAction}>Trigger Child Action</button>
    </div>
  );
}

export default memo(Child);
