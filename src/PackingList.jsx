import React, { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onTogglePacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  // This function could be used to sort the items based on the selected criteria
  let sortedItems;

  if (sortBy === "input") sortedItems = [...items];

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); // Sort by description
  }

  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed); // Sort by packed status
  }

  if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity); // Sort by quantity
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button
          className="btn btn-delete"
          onClick={() => onClearList()} // This would typically clear the list
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
