import React, { useMemo, useState } from "react";
import { UserContext } from "./UserContext";
import UserName from "./UserName";
import UserAge from "./UserAge";

/**
 * Demonstrates selector-like pattern
 * using memoized provider value.
 */
function Parent(): React.ReactElement {
  const [name, setName] = useState<string>("Sid");
  const [age, setAge] = useState<number>(25);

  /**
   * Memoize context value to avoid new reference
   * when unrelated state changes.
   */
  const value = useMemo(() => ({ name, age }), [name, age]);

  console.log("Parent Rendered - selector pattern");

  return (
    <section style={{ padding: "2rem", border: "1px solid purple" }}>
      <h2>Context Selector Pattern</h2>

      <UserContext.Provider value={value}>
        <UserName />
        <UserAge />

        <button
          onClick={() => setName((prev) => (prev === "Sid" ? "Alex" : "Sid"))}
          style={{ marginTop: "1rem" }}
        >
          Toggle Name
        </button>

        <button
          onClick={() => setAge((prev) => prev + 1)}
          style={{ marginLeft: "1rem" }}
        >
          Increment Age
        </button>
      </UserContext.Provider>
    </section>
  );
}

export default Parent;
