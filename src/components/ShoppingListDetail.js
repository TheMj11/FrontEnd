import React, { useState } from 'react';

const initialData = {
  name: "Můj nákupní seznam",
  items: [
    { id: 1, name: "Mléko", completed: false },
    { id: 2, name: "Chléb", completed: true },
    { id: 3, name: "Máslo", completed: false },
  ],
  owner: true,  // Indikuje, zda je aktuální uživatel vlastníkem seznamu
};

function ShoppingListDetail() {
  const [list, setList] = useState(initialData);

  // Funkce pro přidání položky
  const addItem = (itemName) => {
    setList(prevList => ({
      ...prevList,
      items: [...prevList.items, { id: Date.now(), name: itemName, completed: false }]
    }));
  };

  // Funkce pro odebrání položky
  const removeItem = (itemId) => {
    setList(prevList => ({
      ...prevList,
      items: prevList.items.filter(item => item.id !== itemId)
    }));
  };

  // Funkce pro označení položky jako vyřešené
  const toggleItemCompleted = (itemId) => {
    setList(prevList => ({
      ...prevList,
      items: prevList.items.map(item => item.id === itemId ? { ...item, completed: !item.completed } : item)
    }));
  };

  return (
    <div>
      <h1>{list.name}</h1>
      {list.items.map(item => (
        <div key={item.id}>
          <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>
            {item.name}
          </span>
          <button onClick={() => toggleItemCompleted(item.id)}>
            {item.completed ? "Označit jako nevyřešené" : "Označit jako vyřešené"}
          </button>
          <button onClick={() => removeItem(item.id)}>Odebrat</button>
        </div>
      ))}
      {list.owner && (
        <button onClick={() => addItem("Nová položka")}>Přidat položku</button>
      )}
    </div>
  );
}

export default ShoppingListDetail;
