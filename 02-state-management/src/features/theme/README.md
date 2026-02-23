# Theme Slice – Global UI State Management (Redux Toolkit)

## 📌 Overview

This feature demonstrates how to manage **global UI state** using Redux Toolkit.

The Theme slice is intentionally simple (light/dark toggle) but is used to deeply understand:

- Global state architecture
- Fine-grained subscriptions
- Redux vs Context performance
- Immutable state updates
- Slice-level re-render behavior
- Why Redux scales better than Context

---

# 🏗 Architecture Flow

```
Component
   ↓
dispatch(toggleTheme())
   ↓
Reducer (createSlice)
   ↓
New Immutable State
   ↓
Store notifies subscribers
   ↓
useSelector(state => state.theme.mode)
   ↓
Component re-renders (if theme changed)
```

---

# 🧩 Concepts Covered

## 1️⃣ Global UI State

Theme state is global because:

- It affects multiple components
- It controls UI styling
- It must remain consistent across app

State structure:

```ts
interface ThemeState {
  mode: "light" | "dark";
}
```

---

## 2️⃣ createSlice for UI State

Example reducer:

```ts
toggleTheme: (state) => {
  state.mode = state.mode === "light" ? "dark" : "light";
};
```

Redux Toolkit:

- Allows mutating syntax
- Internally ensures immutability
- Generates action creators automatically

---

## 3️⃣ useSelector Subscription

```ts
const theme = useSelector((state: RootState) => state.theme.mode);
```

How it works:

- Subscribes component to theme slice
- Runs selector on every dispatch
- Compares previous value with new one using strict equality (`===`)
- Re-renders only if value changes

---

## 4️⃣ Immutable Change Detection

Redux detects updates using reference comparison:

```
prevState !== nextState
```

Even though we write:

```ts
state.mode = "dark";
```

Immer creates a new immutable copy internally.

---

# ⚡ Performance Insight

## 🔹 Why Redux is Better Than Context for Theme

### Context Behavior

If using:

```ts
<ThemeContext.Provider value={{ mode }}>
```

When mode changes:

- Entire provider subtree re-renders
- All consumers re-render
- Even components not using theme may re-render

---

### Redux Behavior

```ts
useSelector((state) => state.theme.mode);
```

- Only components selecting `theme.mode` re-render
- Other components remain unaffected
- Fine-grained subscription improves performance

---

# 🔍 What Happens If You Select Entire State?

Bad:

```ts
useSelector((state) => state);
```

Result:

- Component re-renders on every dispatch
- Because root state object reference changes each time

Correct:

```ts
useSelector((state) => state.theme.mode);
```

---

# 🎯 Interview Questions & Answers

### Q1: Why use Redux instead of Context for theme?

**Answer:**

Redux provides fine-grained subscription through selectors. Context re-renders all consumers when provider value changes, while Redux only re-renders components selecting the changed slice.

---

### Q2: What ensures that only Theme component re-renders?

**Answer:**

`useSelector` subscribes to `state.theme.mode`. React-Redux compares the previous selected value with the new one using strict equality. Only if it changes does the component re-render.

---

### Q3: What happens internally when toggleTheme is dispatched?

**Answer:**

Action is dispatched → reducer updates state immutably → store updates root state → subscribers notified → `useSelector` compares selected slice → component re-renders if changed.

---

### Q4: Why is immutability still important for UI state?

**Answer:**

Redux relies on reference comparison to detect state changes efficiently. Without immutability, updates may not be detected properly.

---

### Q5: When is Redux overkill for theme?

**Answer:**

In small applications with minimal shared state, Context API is sufficient. Redux becomes valuable when the app grows and state becomes more complex.

---

# 🧠 Advanced Understanding

## Redux Subscription Granularity

Redux subscribes at selector level.

Context subscribes at provider value level.

This makes Redux more scalable for:

- Large applications
- Frequently changing global state
- Complex UI interactions

---

# 🏆 Senior-Level Takeaways

- Global UI state should be predictable
- Fine-grained subscription improves performance
- Selecting minimal state is critical
- Redux scales better than Context
- Immutable updates enable efficient change detection
- Redux DevTools can inspect UI state changes

---

# 🔁 Comparison: Theme in Context vs Redux

| Feature            | Context              | Redux                    |
| ------------------ | -------------------- | ------------------------ |
| Subscription Level | Whole provider value | Selected slice           |
| Re-render Scope    | All consumers        | Only selected components |
| DevTools Support   | No                   | Yes                      |
| Time Travel        | No                   | Yes                      |
| Scalability        | Limited              | Strong                   |

---

# 📌 Final Takeaways

This Theme slice demonstrates:

- How Redux manages global UI state
- How fine-grained subscription prevents unnecessary re-renders
- Why Redux architecture is more scalable than Context
- How immutability enables efficient change detection
- Why selecting minimal slice improves performance
