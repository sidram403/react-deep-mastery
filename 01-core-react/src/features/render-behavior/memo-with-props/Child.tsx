import React, { memo } from "react";

/**
 * Child Component (Memo Version)
 *
 * Receives config object as prop
 *
 * Important concept:
 * - React.memo does shallow comparison.
 * - If object reference changes, component re-renders
 */

interface ChildProps {
  config: {
    theme: string;
  };
}

function Child({ config }: ChildProps): React.ReactElement {
  console.log("Child Rendered - memo-with-props");

  return (
    <div>
      Child Theme : <strong>{config.theme}</strong>
    </div>
  );
}

export default memo(Child);
