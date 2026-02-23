import React from "react";
import { useContext } from "react";
import { NameContext } from "./NameContext";

/**
 * Consumes only NameContext.
 */
function UserName(): React.ReactElement {
  const name = useContext(NameContext);

  console.log("UserName Rendered");

  return (
    <div>
      <strong>Name:</strong> {name}
    </div>
  );
}

export default UserName;
