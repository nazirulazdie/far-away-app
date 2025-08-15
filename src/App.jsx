import React from "react";
import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

// Initial items for the packing list
const initialItems = [
  // { id: 1, description: "Passports", quantity: 2, packed: false },
  // { id: 2, description: "Socks", quantity: 12, packed: false },
  // { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleDeleteItem(itemId) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  // This function could be used to toggle the packed status of an item
  function handleTogglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmClear = window.confirm(
      "Are you sure you want to clear the packing list?"
    );
    if (confirmClear) setItems([]);
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onTogglePacked={handleTogglePacked}
          onClearList={handleClearList}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
