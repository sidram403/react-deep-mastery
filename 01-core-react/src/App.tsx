import React from "react";
import { RenderBehavior } from "./features/render-behavior";
import { MemoWithProps } from "./features/memo-with-props";
import { UseMemoStabilization } from "./features/usememo-stabilization";
import { UseCallabackStabilization } from "./features/usecallback-stabilization";

/**
 * Application root
 *
 * Acts as composition root.
 * Only responsible for assembling feature modules.
 */

function App(): React.ReactElement {
  return (
    <main>
      <h1>01 - Core React Funndations</h1>
      <RenderBehavior />
      <MemoWithProps />
      <UseMemoStabilization />
      <UseCallabackStabilization />
    </main>
  );
}

export default App;
