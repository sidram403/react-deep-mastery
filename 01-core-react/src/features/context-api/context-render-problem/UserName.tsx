import type React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

/**
 * Consumes only name.
 */
function UserName(): React.ReactElement {
  const { name } = useContext(UserContext);

  console.log("Username Rendered");

  return (
    <div>
      <strong>Name:</strong> {name}
    </div>
  );
}

export default UserName;
