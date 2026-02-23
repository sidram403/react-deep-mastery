import type React from "react";
import Counter from "./features/counter/Counter";
import ThemeSwitcher from "./features/theme/ThemeSwitcher";
import UserProfile from "./features/user/UserProfile";

function App(): React.ReactElement {
  return (
    <main>
      <h2>02 - Redux State Management</h2>
      <ThemeSwitcher />
      <Counter />
      <UserProfile />
    </main>
  );
}

export default App;
