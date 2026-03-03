import type React from "react";
import { useMemo, useState, type UIEvent } from "react";

/**
 * Manual virtualization Implementation
 *
 * Demonstrates core virtualization logic
 * - Render only visible range
 * - Calculate visible range
 * - Offset items using transform
 */
function WithVirtualization(): React.ReactElement {
  const ITEM_HEIGHT = 50;
  const CONTAINER_HEIGHT = 500;
  const TOTAL_ITEMS = 10000;

  const items = useMemo(
    () =>
      Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
        id: index,
        label: `Item ${index}`,
      })),
    [],
  );

  const [scrollTop, setScrollTop] = useState<number>(0);

  /**
   * Calculate visible range
   */
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT);

  const endIndex = startIndex + visibleCount;

  const visibleItems = items.slice(startIndex, endIndex);

  /**
   * Total height to simulate full list
   */
  const totalHeight = TOTAL_ITEMS * ITEM_HEIGHT;

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
    console.log(event.currentTarget.scrollTop);
  };

  return (
    <section
      style={{
        height: CONTAINER_HEIGHT,
        overflowY: "auto",
        border: "1px solid #ccc",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      {/* Fake total height */}
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              top: (startIndex + index) * ITEM_HEIGHT,
              left: 0,
              height: ITEM_HEIGHT,
              right: 0,
              padding: "12px",
              borderBottom: "1px solid #eee",
              background: "#fff",
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default WithVirtualization;
