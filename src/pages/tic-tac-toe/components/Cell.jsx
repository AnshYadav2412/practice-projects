import React from "react";

const Cell = (props) => {
  return (
    <div
      className="h-20 w-20 text-black rounded-2xl bg-amber-400 flex justify-center items-center text-6xl hover:bg-amber-300 cursor-pointer"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Cell;
