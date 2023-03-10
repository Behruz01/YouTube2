import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [value, setValue] = useState("");
  const store = useSelector((state) => state);

  const dispatch = useDispatch();
  console.log(store);

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const updateCounterHendler = () => {
    dispatch({ type: "update", payload: value });
  };
  return (
    <div className="flex gap-10 items-center">
      <input
        className="bg-gray-500 p-3 text-white"
        type="text"
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
      />
      <button
        onClick={updateCounterHendler}
        className="ml-4 bg-blue-400 p-3 rounded"
      >
        Add
      </button>
      <div className="flex items-center gap-5">
        <button onClick={decrementHandler}>-</button>
        <p className=" text-blue-600">{store.counter}</p>
        <button onClick={incrementHandler}>+</button>
      </div>
      {store.isLogin ? <p>login qilingan</p> : <p>login qilinmagan</p>}
      <button
        className="ml-4 bg-blue-400 p-3 rounded"
        onClick={() => dispatch({ type: "login" })}
      >
        login
      </button>
    </div>
  );
};

export default Home;
