import React, { forwardRef, useImperativeHandle, useRef } from "react";

/**
 * Public API exposed to parent via ref.
 *
 * This controls what parent is allowed to access.
 */
export interface CustomInputRef {
  focus: () => void;
  clear: () => void;
}

/**
 * CustomInput Component
 *
 * Demonstrates:
 * - forwardRef usage
 * - useImperativeHandle
 *
 * Insight:
 * - Do NOT expose entire DOM node
 * - Expose only required methods
 */

const CustomInput = forwardRef<CustomInputRef>((_, ref): React.ReactElement => {
  const internalInputRef = useRef<HTMLInputElement | null>(null);

  /**
   * useImperativeHandle allows us to
   * define exactly what the parent can access.
   */
  useImperativeHandle(ref, () => ({
    focus: () => {
      internalInputRef.current?.focus();
    },
    clear: () => {
      if (internalInputRef.current) {
        internalInputRef.current.value = "";
        console.log("Clear:", internalInputRef.current.value);
      }
    },
  }));

  return (
    <input
      ref={internalInputRef}
      type="text"
      placeholder="Controlled via parent"
    />
  );
});

export default CustomInput;
