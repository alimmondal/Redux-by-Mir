import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

function Child() {
  const { count, setCount } = useContext(COUNTER_CONTEXT);
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

export default Child;
