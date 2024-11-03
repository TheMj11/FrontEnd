// src/components/ShoppingListDetail.js
import React, { useState } from 'react';
import { shoppingListData } from '../data';

function ShoppingListDetail() {
  const [shoppingList, setShoppingList] = useState(shoppingListData);
  const [newItemName, setNewItemName] = useState("");

  // Funkce pro změnu názvu seznamu (pouze pokud je uživatel vlastníkem)
  const handleNameChange = (e) => {
    if (shoppingList.owner === "user123") {
      setShoppingList({ ...shoppingList, name: e.target.value });
    }
  };

  // Přidání nové položky
  const addItem = () => {
    if (newItemName.trim() !== "") {
      const newItem = {
        id: shoppingList.items.length + 1,
        name: newItemName,
        resolved: false,
      };
      setShoppingList({
        ...shoppingList,
        items: [...shoppingList.items, newItem],
      });
      setNewItemName("");
    }
  };

  // Odebrání položky
  const removeItem = (itemId) => {
    setShoppingList({
      ...shoppingList,
      items: shoppingList.items.filter((item) => item.id !== itemId),
    });
  };

  // Nastavení položky jako vyřešené/nevyřešené
  const toggleItemResolved = (itemId) => {
    setShoppingList({
      ...shoppingList,
      items: shoppingList.items.map((item) =>
        item.id === itemId ? { ...item, resolved: !item.resolved } : item
      ),
    });
  };

  // Filtr nevyřešených položek
  const unresolvedItems = shoppingList.items.filter(item => !item.resolved);

  return (
    <div>
      <h1>Nákupní seznam: <input type="text" value={shoppingList.name} onChange={handleNameChange} /></h1>
      <h2>Položky:</h2>
      <ul>
        {shoppingList.items.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.resolved ? "line-through" : "none" }}>
              {item.name}
            </span>
            <button onClick={() => toggleItemResolved(item.id)}>
              {item.resolved ? "Neoznačit jako vyřešené" : "Označit jako vyřešené"}
            </button>
            <button onClick={() => removeItem(item.id)}>Odebrat</button>
          </li>
        ))}
      </ul>
      <h2>Přidat novou položku:</h2>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button onClick={addItem}>Přidat</button>
      <h3>Neřešené položky:</h3>
      <ul>
        {unresolvedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingListDetail;
