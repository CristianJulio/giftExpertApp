import React, { useState } from 'react';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    setCategories((categories) => ([inputValue, ...categories]))
    setInputValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Ingresa un termino para buscar..."
        onChange={(e) => setInputValue(e.target.value)}
      />

    </form>
  );
};

export default AddCategory;
