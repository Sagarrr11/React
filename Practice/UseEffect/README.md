# React useEffect & API Fetching

A small React practice project focused on understanding `useEffect`, dependency arrays, state changes, and fetching data from an API using Axios.

## Concepts Covered

- `useState`
- `useEffect`
- Dependency arrays
- Component re-rendering
- API requests with Axios
- Async/Await
- Controlled inputs
- State-driven UI updates

## How It Works

The application contains:

- A text input controlled by React state.
- A counter that can be increased.
- A random number that can be changed.
- A username fetched from the Random User API.

The `useEffect` hook has `count` and `number1` as dependencies:

```js
useEffect(() => {
  getData()
}, [count, number1])