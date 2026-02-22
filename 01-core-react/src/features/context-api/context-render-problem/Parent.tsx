/**
 * Demonstartes Context Re-render problem.
 *
 * When any part of context value changes.
 * All consumers re-render.
 */

import type React from "react";
import { useState } from "react";
import { UserContext } from "./UserContext";
import UserName from "./UserName";
import UserAge from "./UserAge";

function Parent(): React.ReactElement {
  const [name, setName] = useState("Sid");
  const [age, setAge] = useState(25);

  console.log("Parent Rendered");

  return (
    <section style={{ padding: "2rem", border: "1px solid red" }}>
      <h2>Context Re-render Problem</h2>

      <UserContext.Provider value={{ name, age }}>
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
