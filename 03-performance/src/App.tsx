import React from "react";
import WithoutVirtualization from "./features/virtualization-basic/WithoutVirtualization";
import WithVirtualization from "./features/virtualization-basic/WithVirtualization";
import WithVirtualizationOverscan from "./features/virtualization-overscan/WithVirtualizationOverscan";

const App = () => {
  return (
    <div>
      {/* <WithoutVirtualization /> */}
      {/* <WithVirtualization /> */}
      <WithVirtualizationOverscan />
    </div>
  );
};

export default App;
