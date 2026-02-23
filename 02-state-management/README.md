# 02 – State Management (Redux Toolkit Deep Dive)

## 📌 Overview

This module focuses on understanding **Redux Toolkit** as a scalable and performance-oriented state management solution for React applications.

The goal of this section is not just to use Redux, but to deeply understand:

- Why Redux exists
- How it works internally
- How it differs from Context API
- How async state is handled
- How fine-grained subscriptions improve performance
- When Redux should and should not be used

---

# 🎯 Learning Objectives

After completing this module, you should be able to:

- Explain Redux architecture clearly in interviews
- Understand store, reducer, action flow
- Implement slices using Redux Toolkit
- Handle async operations using `createAsyncThunk`
- Understand middleware role in Redux
- Optimize performance using selective subscriptions
- Compare Redux vs Context with technical clarity

---

# 🏗 Architecture Overview

Redux follows a unidirectional data flow:

Component
↓
dispatch(action)
↓
Middleware (optional)
↓
Reducer (pure function)
↓
New Immutable State
↓
Store notifies subscribers
↓
useSelector compares selected slice
↓
Component re-renders (if needed)

---

# 📂 Project Structure

src/
app/
store.ts

features/
counter/ → Basic synchronous slice
theme/ → Global UI state example
user/ → Async state using createAsyncThunk

---

# 🧩 Concepts Covered

## 1️⃣ Store Configuration

- `configureStore`
- Root reducer setup
- DevTools integration
- Default middleware (Redux Thunk)

---

## 2️⃣ Slices & Reducers

- `createSlice`
- Action creators auto-generated
- Immer-powered immutable updates
- Pure reducer principles

---

## 3️⃣ Fine-Grained Subscription

- `useSelector`
- Strict equality comparison (`===`)
- Avoiding unnecessary re-renders
- Why selecting entire state is bad

---

## 4️⃣ Global UI State

- Theme management using Redux
- Comparison with Context API
- Performance benefits of slice-level subscription

---

## 5️⃣ Async State Management

- `createAsyncThunk`
- pending / fulfilled / rejected lifecycle
- Loading and error handling
- Why reducers must remain pure
- Middleware-driven async flow

---

## 6️⃣ Performance Awareness

- Immutable state detection
- Selector-based re-render control
- Avoiding root state selection
- Predictable state transitions

---

# 🔍 Why Redux Over Context?

| Feature                   | Context API | Redux Toolkit |
| ------------------------- | ----------- | ------------- |
| Fine-grained subscription | ❌ No       | ✅ Yes        |
| Middleware support        | ❌ No       | ✅ Yes        |
| Async lifecycle handling  | Manual      | Built-in      |
| DevTools & Time Travel    | ❌ No       | ✅ Yes        |
| Large-scale scalability   | Limited     | Strong        |

---

# 🧠 Core Architectural Principles

- Reducers must be pure and deterministic
- Side effects belong in middleware
- State updates must be immutable
- Components should select minimal required state
- Global state should remain predictable

---

# 🏆 Interview Topics Covered in This Module

- Why reducers must be pure
- How Redux detects state changes
- What is a thunk
- How createAsyncThunk works internally
- Difference between reducers and extraReducers
- Why immutability matters
- Redux vs Context performance comparison
- Middleware architecture in Redux

---

# 🚀 Outcome of This Module

By completing `02-state-management`, you now understand:

- Production-grade Redux Toolkit usage
- Async state handling
- Performance-optimized subscriptions
- Clean state architecture
- Interview-level explanation of Redux internals

---

Next modules will expand into:

- Advanced selector optimization
- Custom middleware implementation
- RTK Query (data fetching abstraction)
- Performance debugging strategies
