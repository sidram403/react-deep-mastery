/**
 * Virtualization with OverScan Buffer
 *
 * Improvements over basic virtualization:
 * - Adds overscan buffer above & below viewport
 * - Prevents flicker during fast scrolling
 * - Improves scroll smoothness
 */

import type React from "react";
import { useMemo, useState, type UIEvent } from "react";

function WithVirtualizationOverscan(): React.ReactElement {
  const ITEM_HEIGHT = 50;
  const CONTAINER_HEIGHT = 500;
  const TOTAL_ITEMS = 10000;
  const OVERSCAN_COUNT = 5;

  const items = useMemo(
    () =>
      Array.from({ length: TOTAL_ITEMS }, (_, index) => ({
        id: index,
        lable: `Item ${index}`,
      })),
    [],
  );

  const [scrollTop, setScrollTop] = useState<number>(0);

  /**
   * Calculate visible start index with overscan
   */
  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ITEM_HEIGHT) - OVERSCAN_COUNT,
  );

  /**
   * Calculate how many items should render
   */
  const visibleCount =
    Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + OVERSCAN_COUNT * 2;

  const endIndex = Math.min(TOTAL_ITEMS, startIndex + visibleCount);

  const visibleItems = items.slice(startIndex, endIndex);

  const totalHeight = CONTAINER_HEIGHT * ITEM_HEIGHT;

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div
      style={{
        height: CONTAINER_HEIGHT,
        position: "relative",
        overflowY: "auto",
        border: "1px solid #ccc",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, index) => (
          <div
            style={{
              position: "absolute",
              top: (startIndex + index) * ITEM_HEIGHT,
              left: 0,
              right: 0,
              height: ITEM_HEIGHT,
              borderBottom: "1px solid #eee",
              background: "#fff",
            }}
            key={item.id}
          >
            {item.lable}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithVirtualizationOverscan;
