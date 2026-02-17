import React from "react";
import { RenderBehavior } from "./features/render-behavior";
import { MemoWithProps } from "./features/memo-with-props";
import { UseMemoStabilization } from "./features/usememo-stabilization";
import { UseCallabackStabilization } from "./features/usecallback-stabilization";
import { UseEffectBasics } from "./features/useeffect/useeffect-basics";
import { UseEffectDependencyTrap } from "./features/useeffect/useeffect-dependency-trap";

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
      <UseEffectBasics />
      <UseEffectDependencyTrap />
    </main>
  );
}

export default App;
