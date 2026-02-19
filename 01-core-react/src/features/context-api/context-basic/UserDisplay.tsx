import React, { useContext } from "react";
import { UserContext } from "./UserContext";

/**
 * UserDisplay Component
 *
 * consumes context using useContext.
 */
function UserDisplay(): React.ReactElement {
  const user = useContext(UserContext);

  console.log("UserDisplay Rendered");

  return (
    <div>
      <strong>User:</strong> {user.name}
    </div>
  );
}

export default UserDisplay;
