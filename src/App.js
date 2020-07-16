import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./components/actions/counterAction";

function App(props) {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </div>
  );
}

export default App;
