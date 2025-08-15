import React, { useState } from "react";

export function Form({ onAddItems }) {
  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    // Logic to handle form submission
    if (!inputValue) {
      alert("Please enter an item.");
      return;
    }
    // Here you would typically add the item to the packing list
    const newItem = {
      id: Date.now(), // Unique ID based on timestamp
      description: inputValue,
      quantity: quantity,
      packed: false,
    };
    console.log("Form submitted with value:", newItem);
    onAddItems(newItem); // Call the function to add the item
    setInputValue(""); // Reset input after submission
    setQuantity(1); // Reset quantity to default
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        name=""
        id=""
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
