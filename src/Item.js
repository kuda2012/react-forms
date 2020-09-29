import React from "react";

const Item = ({ id, todo, number, deleteItem }) => {
  return (
    <li data-testid={`Item${number}`} className="Item" id={id}>
      {todo}
      <button onClick={() => deleteItem(id)}>X</button>
    </li>
  );
};

export default Item;
