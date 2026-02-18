import React, { useEffect, useRef } from "react";

/**
 * useRef - DOM Access Demonstration
 *
 * Demonstrates:
 * - How useRef stores DOM reference
 * - How it does NOT cause re-render
 *
 * Insight:
 * - Ref object remains stable between renders.
 * - Updating ref.current does not trigger re-render.
 */
function Parent(): React.ReactElement {
  /**
   * useRef returns:
   * {
   *  current: initialValue
   * }
   *
   * The object itself remains stable across renders.
   *
   */
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    console.log("Component mounted");

    /**
     * Accessing DOM node directly
     */
    inputRef.current?.focus();
  }, []);

  return (
    <section style={{ padding: "2rem", border: "1px solid brown" }}>
      <h2>useRef - DOM Access</h2>

      <input ref={inputRef} type="text" placeholder="Auto-focused on mount" />
    </section>
  );
}

export default Parent;
