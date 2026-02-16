import React from "react";

/**
 * Child Component
 *
 * Demonstrates that child re-renders when the parent re-renders,
 * even if it receives no props.
 *
 * Important Concept:
 * React re-executes component functions during reconciliation.
 * Re-render does not automatically mean DOM update.
 */
function Child(): React.ReactElement {
  console.log("Child Rendered");

  return <div>Child Component</div>;
}

export default Child;
