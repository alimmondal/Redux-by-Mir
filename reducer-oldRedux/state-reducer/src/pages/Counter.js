import React, { useReducer } from "react";

function Counter() {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return state + action.payload.counter;
    } else if (action.type === "decrement") {
      return state - action.payload.counter;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="wrappers">
        <h1 style={{ textAlign: "center" }}>{state}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() =>
              dispatch({ type: "decrement", payload: { counter: 5 } })
            }
          >
            Decrement
          </button>
          <button
            onClick={() =>
              dispatch({ type: "increment", payload: { counter: 5 } })
            }
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
