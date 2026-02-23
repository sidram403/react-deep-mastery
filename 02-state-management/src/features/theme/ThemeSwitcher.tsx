import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../app/store";
import { toggleTheme } from "./themeSlice";

/**
 * ThemeSwitcher Component
 *
 * Demonstarates :
 * - UI reacting to Redux store changes
 * - Slice-level subscription
 */
function ThemeSwitcher(): React.ReactElement {
  const theme = useSelector((state: RootState) => state.theme.mode);

  const dispatch = useDispatch<AppDispatch>();

  console.log("ThemeSwitcher Rendered");

  return (
    <section
      style={{
        padding: "2rem",
        backgroundColor: theme === "light" ? "#ffffff" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        transition: "all 0.3s ease",
      }}
    >
      <h2>Theme: {theme.toUpperCase()}</h2>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </section>
  );
}

export default ThemeSwitcher;
