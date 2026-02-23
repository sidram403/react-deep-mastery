# Counter Slice – Redux Toolkit Core Concepts

## 📌 Overview

This feature demonstrates the **core fundamentals of Redux Toolkit** using a simple counter example.

It focuses on understanding:

- Redux store configuration
- Slice architecture
- Immutable state updates
- Dispatch flow
- Fine-grained subscription using `useSelector`
- How Redux detects state changes
- Why immutability matters
- How Redux differs from Context API

---

# 🏗 Redux Architecture Flow

```
Component
   ↓
dispatch(action)
   ↓
Middleware (if any)
   ↓
Reducer (pure function)
   ↓
New Immutable State
   ↓
Store notifies subscribers
   ↓
useSelector compares selected slice (===)
   ↓
Component re-renders (if changed)
```

---

# 🧩 Concepts Covered

## 1️⃣ configureStore

`configureStore`:

- Sets up Redux store
- Enables Redux DevTools automatically
- Adds Redux Thunk middleware by default
- Enables development warnings

Example:

```ts
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## 2️⃣ createSlice

`createSlice`:

- Combines reducer + action creators
- Removes switch-case boilerplate
- Automatically generates action creators
- Uses Immer internally

Example:

```ts
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});
```

---

## 3️⃣ Immutable Updates (Immer)

Redux requires immutable state updates.

Instead of:

```ts
return { ...state, value: state.value + 1 };
```

Redux Toolkit allows:

```ts
state.value += 1;
```

Because:

- Immer tracks mutations
- Produces new immutable copy internally
- Maintains reference change

---

## 4️⃣ useSelector – Fine-Grained Subscription

```ts
const count = useSelector((state: RootState) => state.counter.value);
```

How it works:

- Subscribes component to store
- Runs selector after every dispatch
- Compares previous selected value with new one using `===`
- Re-renders only if selected value changes

---

## 5️⃣ useDispatch

```ts
dispatch(increment());
```

Dispatch:

- Sends action to store
- Reducer processes action
- Store updates state
- Subscribers notified

---

# ⚡ Performance Concepts

## 🔹 Why Select Minimal Slice?

Bad:

```ts
useSelector((state) => state);
```

This causes:

- Re-render on every dispatch
- Because root state reference changes

Good:

```ts
useSelector((state) => state.counter.value);
```

Only re-renders when `counter.value` changes.

---

## 🔹 How Redux Detects Changes

Redux relies on:

```
prevState !== nextState
```

Reference must change.

If state is mutated directly without new reference:

- Change detection fails
- UI may not update

---

# 🎯 Interview Questions & Answers

### Q1: What happens when dispatch is called?

Dispatch sends action → middleware processes → reducer returns new immutable state → store updates → subscribers notified → `useSelector` compares slice → component re-renders if needed.

---

### Q2: Why must reducers be pure?

Reducers must be deterministic. Given the same state and action, they must return the same result. This ensures predictability and enables time-travel debugging.

---

### Q3: Why is immutability critical in Redux?

Redux detects changes using reference equality. Without immutability, state updates cannot be efficiently detected.

---

### Q4: How does useSelector prevent unnecessary re-renders?

It compares selected value using strict equality (`===`) and only re-renders if the selected value changes.

---

### Q5: What problem does createSlice solve?

It removes boilerplate, generates action creators automatically, and simplifies immutable state updates using Immer.

---

# 🧠 Key Takeaways

- Redux enforces predictable state transitions
- Immutability enables efficient change detection
- useSelector provides fine-grained subscriptions
- Redux Toolkit simplifies Redux architecture
- Selecting minimal state improves performance
