import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";
import NewItemForm from "./NewItemForm";

const Todo = () => {
  const [items, setItems] = useState([]);
  const addItem = (newItem) => {
    setItems((items) => [...items, { ...newItem, id: uuid() }]);
  };
  const deleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
  };
  return (
    <>
      <h3>To-do List</h3>
      <NewItemForm addItem={addItem} />
      {items.length !== 0 && (
        <ul className="Todo" data-testid="Todo">
          {items.map((item, i) => (
            <Item
              key={item.id}
              id={item.id}
              todo={item.todo}
              number={i}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default Todo;
