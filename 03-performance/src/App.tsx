import React from "react";
import WithoutVirtualization from "./features/virtualization-basic/WithoutVirtualization";
import WithVirtualization from "./features/virtualization-basic/WithVirtualization";

const App = () => {
  return (
    <div>
      {/* <WithoutVirtualization /> */}
      <WithVirtualization />
    </div>
  );
};

export default App;
