import React from "react";
import { RenderBehavior } from "./features/render-behavior";
import { MemoWithProps } from "./features/render-behavior/memo-with-props";

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
    </main>
  );
}

export default App;
