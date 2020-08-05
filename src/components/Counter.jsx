import React from "react";
import {
  incrementAction,
  decrementAction,
  resetAction,
} from "../actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrementAction)}>Decrement</button>
      <button onClick={() => dispatch(resetAction)}>Reset</button>
      <button onClick={() => dispatch(incrementAction)}>Increment</button>
    </div>
  );
};

export default Counter;
