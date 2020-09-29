import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
  //   const INITIAL_STATE = [
  //     { id: uuid(), width: "200px", height: "200px", backgroundColor: "blue" },
  //     { id: uuid(), width: "200px", height: "400px", backgroundColor: "green" },
  //   ];
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const deleteBox = (id) => {
    setBoxes((boxes) => {
      return boxes.filter((box) => box.id !== id);
    });
  };

  return (
    <>
      <h3>Box List</h3>
      <NewBoxForm addBox={addBox} />
      {boxes.length !== 0 && (
        <div className="BoxList" data-testid="BoxList">
          {boxes.map((box, i) => (
            <Box
              number={i}
              key={box.id}
              id={box.id}
              width={box.width}
              height={box.height}
              backgroundColor={box.backgroundColor}
              deleteBox={deleteBox}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BoxList;
