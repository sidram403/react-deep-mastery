import { useContext } from "react";
import { UserContext } from "./UserContext";

/**
 * Consumes only age
 */
function UserAge(): React.ReactElement {
  const { age } = useContext(UserContext);

  console.log("UserAge rendered");

  return (
    <div>
      <strong>Age:</strong> {age}
    </div>
  );
}

export default UserAge;
