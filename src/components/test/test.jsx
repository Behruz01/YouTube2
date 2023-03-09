import { useReducer } from "react";
import { DECREMENT, INCREMENT } from "../constantas/const.js";
import { reduser } from "./reduser.js";
const initialState = 0;

function Test() {
  const [count, dispatch] = useReducer(reduser, initialState);

  return (
    <>
      <div className="flex div">
        <button
          className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          onClick={() => dispatch({ type: INCREMENT })}
        >
          Inc
        </button>
        <h1 className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md ">
          Counter:{count}
        </h1>
        <button
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => dispatch({ type: DECREMENT })}
        >
          Dec
        </button>
      </div>
    </>
  );
}
export default Test;
