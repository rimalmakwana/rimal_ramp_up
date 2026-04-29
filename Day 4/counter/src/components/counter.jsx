import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => Math.max(0, prev - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1
        style={{
          color: count === 0 ? "blue" : "green",
        }}
      >
        {count}
      </h1>

      <button onClick={handleIncrement}>+ Increment</button>

      <button onClick={handleDecrement} style={{ marginLeft: "10px" }}>
        – Decrement
      </button>

      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
