import React from "react";
import "./Box.css";

const Box = ({ id, backgroundColor, height, width, number, deleteBox }) => {
  return (
    <div
      data-testid={`Box${number}`}
      className="Box"
      id={id}
      style={{ height, width, backgroundColor }}
    >
      <h5 onClick={() => deleteBox(id)} className="Box-delete">
        X
      </h5>
    </div>
  );
};

export default Box;
