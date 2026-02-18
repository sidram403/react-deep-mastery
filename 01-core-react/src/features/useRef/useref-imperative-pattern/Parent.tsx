import React, { useRef } from "react";
import CustomInput from "./CustomInput";
import type { CustomInputRef } from "./CustomInput";

/**
 * Parent Component
 *
 * Demonstrates:
 * - Using ref to call child methods
 * - Imperative pattern usage
 *
 * Model:
 * - Imperative pattern is escape hatch
 * - Sholud be used sparingly
 */
function Parent(): React.ReactElement {
  const inputRef = useRef<CustomInputRef | null>(null);

  const handleFocus = (): void => {
    inputRef.current?.focus();
  };

  const handleClear = (): void => {
    inputRef.current?.clear();
  };

  return (
    <section style={{ padding: "2rem", border: "1px solid gold" }}>
      <h2>useRef Imperative Pattern</h2>

      <CustomInput ref={inputRef} />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear} style={{ marginLeft: "1rem" }}>
          Clear Input
        </button>
      </div>
    </section>
  );
}

export default Parent;
