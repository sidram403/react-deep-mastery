import React, { useState } from "react";
import { UserContext } from "./UserContext";
import UserDisplay from "./UserDisplay";

/**
 * Parent Component
 *
 * Provides exontext value
 */
function Parent(): React.ReactElement {
  const [name, setName] = useState<string>("Sid");

  return (
    <section style={{ padding: "2rem", border: "1px solid gray" }}>
      <h2>Context Basic Example</h2>

      <UserContext.Provider value={{ name }}>
        <UserDisplay />

        <button
          onClick={() => setName((prev) => (prev === "Sid" ? "Alex" : "Sid"))}
        >
          Toggle USer
        </button>
      </UserContext.Provider>
    </section>
  );
}

export default Parent;
