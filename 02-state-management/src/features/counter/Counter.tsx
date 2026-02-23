import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../app/store";
import { decrement, increment, incrementByAmount } from "./counterSlice";

/**
 * Counter Component
 *
 * Demonstrates:
 * - useSelector for slice subscription
 * - useDispatch for action dispatch
 *
 * Important:
 * useSelector re-renders component only
 * when selected state changes.
 */
function Counter(): React.ReactElement {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  console.log("Counter Component Rendered");

  return (
    <section style={{ padding: "2rem", border: "1px solid blue" }}>
      <h2>Redux Counter</h2>

      <p>
        <strong>Value:</strong> {count}
      </p>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "1rem" }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        style={{ marginLeft: "1rem" }}
      >
        Increment By 5
      </button>
    </section>
  );
}

export default Counter;
