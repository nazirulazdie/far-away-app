import React from "react";

export function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  }

  // Here you would typically calculate the stats based on the items
  const totalItems = items.length; // Replace with actual count of items
  const packedItems = items.filter((item) => item.packed).length; // Replace with actual count of packed items
  const packedPercentage =
    totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything ready to go! ✈️"
          : `You have ${totalItems} items on your list, and already packed ${packedItems} (${packedPercentage})%.`}
      </em>
    </footer>
  );
}
