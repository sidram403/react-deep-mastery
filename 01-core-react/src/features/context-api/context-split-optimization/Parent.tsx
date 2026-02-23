import type React from "react";
import { useState } from "react";
import { NameContext } from "./NameContext";
import { AgeContext } from "./AgeContext";
import UserName from "./UserName";
import UserAge from "./UserAge";

/**
 * Demonstrates context spiltting optimization
 *
 * Now changing age will NOT re-render name consumer.
 */
function Parent(): React.ReactElement {
  const [name, setName] = useState<string>("Sid");
  const [age, setAge] = useState<number>(25);

  console.log("Parent Rendered - Split Optimization");

  return (
    <section style={{ padding: "2rem", border: "1px solid green" }}>
      <h2>Context Split Optimization</h2>

      <NameContext.Provider value={name}>
        <AgeContext.Provider value={age}>
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
        </AgeContext.Provider>
      </NameContext.Provider>
    </section>
  );
}

export default Parent;
