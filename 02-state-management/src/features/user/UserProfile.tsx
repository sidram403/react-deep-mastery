import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../app/store";
import { fetchUser } from "./userSlice";

/**
 * UserProfile Component
 *
 * Demonstrates async lifecycle handling.
 */
function UserProfile(): React.ReactElement {
  const { name, email, loading, error } = useSelector(
    (state: RootState) => state.user,
  );

  const dispatch = useDispatch<AppDispatch>();

  console.log("Userprofile Rendered");

  return (
    <section style={{ padding: "2rem", border: "1px solid teal" }}>
      <h2>Async thunk Example</h2>

      <button onClick={() => dispatch(fetchUser())}>Fetch User</button>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {name && (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      )}
    </section>
  );
}

export default UserProfile;
