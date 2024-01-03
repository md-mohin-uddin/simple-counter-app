import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount((count) => 0);
  };
  return (
    <div className="App">
      <h1 className="heading">Counter App</h1>
      <div className="card">
        <h2 className="count">Count : {count}</h2>
        <div>
          <button
            className="btn"
            onClick={handleIncrement}
            disabled={count === 5}
          >
            +
          </button>
          <button
            className="btn"
            onClick={handleDecrement}
            disabled={count === -5}
          >
            -
          </button>
          <button className="btn" onClick={reset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
