import React, { memo } from "react";
import { useUserSelector } from "./useUserSelector";

/**
 * Memoized component consuming only name.
 */
function UserName(): React.ReactElement {
  const name = useUserSelector((state) => state.name);

  console.log("UserName Rendered - selector");

  return (
    <div>
      <strong>Name:</strong> {name}
    </div>
  );
}

export default memo(UserName);
