"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter value in counter component", count);
  return (
    <div>
      <h2 className="text-5xl">Counter: {count}</h2>
      <button
        className="p-2 bg-gray-400 cursor-pointer my-2 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
