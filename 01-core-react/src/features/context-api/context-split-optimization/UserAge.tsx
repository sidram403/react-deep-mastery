import React from "react";
import { useContext } from "react";
import { AgeContext } from "./AgeContext";

/**
 * Consumes only AgeContext
 */
function UserAge(): React.ReactElement {
  const age = useContext(AgeContext);

  console.log("USerAge Rendered");

  return (
    <div>
      <strong>Age: </strong> {age}
    </div>
  );
}

export default UserAge;
