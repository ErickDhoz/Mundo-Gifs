import React, { useState } from "react";

export const AddCategories = ({ onNewCategory, onRefresh }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onAddCategories = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    //setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  const refresh = () => {
    onRefresh([].empy);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onNewCategory(inputValue.trim());
    //setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={onInputChange}
      />
      <div className="container-button">
        <button onClick={onAddCategories}>Agregar</button>
        <button onClick={refresh}>Borrar Todo</button>
      </div>
    </form>
  );
};
