import React, { memo } from "react";

/**
 * Child Component
 *
 * Demonstrates that child re-renders when the parent re-renders,
 * even if it receives no props.
 * Wrapped with React.memo to prevent re-renders
 * when props have not changed.
 *
 * Important Concept:
 * React re-executes component functions during reconciliation.
 * Re-render does not automatically mean DOM update.
 * React.memo performs shallow comparison of props.
 * Since this component has no props.
 * it will now only render once.
 */
function Child(): React.ReactElement {
  console.log("Child Rendered");

  return <div>Child Component</div>;
}

export default memo(Child);
