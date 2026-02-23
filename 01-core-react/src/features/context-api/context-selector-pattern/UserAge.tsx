import React, { memo } from "react";
import { useUserSelector } from "./useUserSelector";

/**
 * Memoized component consuming only age.
 */
function UserAge(): React.ReactElement {
  const age = useUserSelector((state) => state.age);

  console.log("UserAge Rendered - selector");

  return (
    <div>
      <strong>Age:</strong> {age}
    </div>
  );
}

export default memo(UserAge);
