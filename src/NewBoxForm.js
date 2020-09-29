import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    backgroundColor: "",
    width: "200px",
    height: "200px",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        onChange={handleChange}
        value={formData.width}
        placeholder="Box Width ex:200px "
      ></input>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        onChange={handleChange}
        value={formData.height}
        placeholder="Box Height ex:200px "
      ></input>
      <label htmlFor="backgroundColor">Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        onChange={handleChange}
        value={formData.backgroundColor}
        placeholder="Box Color"
      ></input>
      <button onClick={handleSubmit}>Create Box</button>
    </form>
  );
};

export default NewBoxForm;
