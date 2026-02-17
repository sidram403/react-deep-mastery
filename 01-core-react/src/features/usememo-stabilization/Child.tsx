import React, { memo } from "react";

/**
 * Child Component (Memo Optimized)
 *
 * Receives a config object.
 * Wrapped in React.memo to prevent unnecessary re-renders
 *
 * Important:
 * - Now relies on stable reference from parent.
 */

interface ChildProps {
  config: {
    theme: string;
  };
}

function Child({ config }: ChildProps): React.ReactElement {
  console.log("Child Rendered - useMemo stabilization");

  return (
    <div>
      Stabilized Theme : <strong>{config.theme}</strong>
    </div>
  );
}

export default memo(Child);
