import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }
  return (
    <div style={{ display: "flex" }}>
      <button onClick={increment}>Increment</button>
      <h1 style={{ margin: "5px" }}>{count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
