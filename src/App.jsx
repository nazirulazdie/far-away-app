import React from "react";
import { useState } from "react";

// Initial items for the packing list
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

function Logo() {
  return <h1>🏖️ Far Away App</h1>;
}

function Form() {
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
    setInputValue(""); // Reset input after submission
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

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? "packed" : ""}>
        {item.description} {item.quantity}
      </span>
      <button className="btn packed-btn">✔️</button>
      <button className="btn delete-btn">❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and already packed X (X%) </em>
    </footer>
  );
}
