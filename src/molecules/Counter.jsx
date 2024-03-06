import React from "react";
import { useCounter } from "../hooks/counterHook";

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="counter-container">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
