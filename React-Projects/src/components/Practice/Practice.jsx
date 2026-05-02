import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    setCount((prev) => prev + step);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - step : 0));
  };

  const reset = () => {
    setCount(0);
  };

  const stepInput = () => {
    const stepCount = Number(step);
    setCount(prev => prev + stepCount);
    setStep(0);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>{count}</h1>
      
      {count > 10 && <p>High Value</p>}
      <button
        onClick={handleIncrease}
        style={{
          margin: "10px auto",
          padding: "5px",
          display: "block",
        }}
      >
        Increase
      </button>
      <button
        onClick={handleDecrease}
        style={{
          margin: "10px auto",
          padding: "5px",
          display: "block",
        }}
      >
        Decrease
      </button>
      <button
        onClick={reset}
        style={{
          margin: "10px auto",
          padding: "5px",
          display: "block",
        }}
      >
        Reset
      </button>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
        style={{
          margin: "10px auto",
          padding: "5px",
          display: "block",
        }}
      />
      <button
        onClick={stepInput}
        style={{
          margin: "10px auto",
          padding: "5px",
          display: "block",
        }}
      >
        Step Increase
      </button>
    </div>
  );
}
