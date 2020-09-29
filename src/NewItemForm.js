import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
  const INITIAL_STATE = { todo: "" };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  return (
    <form onSubmit={addItem}>
      <label htmlFor="todo">Enter To-do Item</label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
};

export default NewItemForm;
