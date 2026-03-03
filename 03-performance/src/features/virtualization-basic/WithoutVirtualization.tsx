import type React from "react";
import { useMemo } from "react";

/**
 * Virtualization Basic - Naive Implementation
 *
 * Purpose:
 * Demonstrate performance problem
 * when rendering large lists without virtualization.
 *
 * This renders 10,000 DOM nodes.
 */
function WithoutVirtualization(): React.ReactElement {
  /**
   * Generate large datasets once.
   */
  const items = useMemo(
    () =>
      Array.from({ length: 10000 }, (_, index) => ({
        id: index,
        label: `Item ${index}`,
      })),
    [],
  );

  console.log("Naive List Rendered");

  return (
    <section
      style={{ height: "500px", overflow: "auto", border: "1px solid #eee" }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{ padding: "12px", borderBottom: "1px solid #eee" }}
        >
          {item.label}
        </div>
      ))}
    </section>
  );
}

export default WithoutVirtualization;
