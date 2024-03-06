import React from "react";
import { useCounter } from "../hooks/CounterHook";

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="counter-container">
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
