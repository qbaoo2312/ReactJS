import React from "react";
import { useAppSelector } from "../hook";
import { selectResult } from "../calculation";

const Show = () => {
  const result = useAppSelector(selectResult);

  return <div>= {result}</div>;
};

export default Show;