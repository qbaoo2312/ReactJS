import React, { useState } from "react";
import { useAppDispatch } from "../hook";

const Calculate = () => {
  const [numA, setnumA] = useState(0);
  const [numB, setnumB] = useState(0);
  const dispatch = useAppDispatch();

  return (
    <div>
      <input type="number" onChange={(e) => setnumA(Number(e.target.value))} />
      <div>
        <button
          onClick={() => dispatch({ type: "cong", payload: { numA, numB } })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "tru", payload: { numA, numB } })}
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "nhan", payload: { numA, numB } })}
        >
          *
        </button>
        <button
          onClick={() => dispatch({ type: "chia", payload: { numA, numB } })}
        >
          /
        </button>
      </div>
      <input type="number" onChange={(e) => setnumB(Number(e.target.value))} />
    </div>
  );
};

export default Calculate;