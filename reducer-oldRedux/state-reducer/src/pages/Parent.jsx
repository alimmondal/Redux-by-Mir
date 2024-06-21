import { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="wrapper">
        <h1>Child</h1>
        <h1 style={{ textAlign: "center" }}>{count}</h1>
        <div className="">
          <button onClick={() => setCount((prevState) => prevState + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((prevState) => prevState - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Parent;
