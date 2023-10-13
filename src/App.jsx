import { useEffect, useState } from "react";
import styles from "./App.module.css";

import bgImage from "./assets/bg-image.jpg";
import ListItem from "./components/ListItem";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const purchasedItems = items.filter((item) => item.purchased);

  //Hook
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3332/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, []);

  async function handleCreate(formData) {
    const res = await fetch("http://localhost:3332/items", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...formData, purchased: false }),
    });
    const data = await res.json();

    setItems([...items, data]);
  }

  async function handleDelete(id) {
    await fetch("http://localhost:3332/items/" + id, {
      method: "DELETE",
    });
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  async function handleCheckedChange(id, checked) {
    //Doing a Optimistic UI
    try {
      const newItems = items.map((item) =>
        item.id === id ? { ...item, purchased: checked } : item
      );
      setItems(newItems);

      await fetch("http://localhost:3332/items/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify({ purchased: checked }),
      });
    } catch (error) {
      const newItems = items.map((item) =>
        item.id === id ? { ...item, purchased: !checked } : item
      );
      setItems(newItems);
      alert(error);
    }
  }

  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de compras</h1>

        <ShoppingForm onSubmit={handleCreate} />

        <div className={styles.purchasedItems}>
          Itens comprados <span>{purchasedItems.length}</span>
        </div>

        <ul className={styles.itemList}>
          {items.length > 0 ? (
            items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                onCheckedChange={handleCheckedChange}
              />
            ))
          ) : isLoading ? (
            <p>Buscando Itens...</p>
          ) : (
            <p>Não há nenhum item na lista.</p>
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
