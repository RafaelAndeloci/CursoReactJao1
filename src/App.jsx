import styles from "./App.module.css";
import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";
import ListItem from "./components/ListItem";
import { useState } from "react";

const ITEMS = [
  {
    id: 1,
    name: "Banana",
    category: "fruta",
    quantity: 10,
    unity: "unidade",
    purchased: false,
  },
];


function App() {
  
  const [items, setItem] = useState(ITEMS);
  let counter = (items[items.length - 1]?.id ?? 0) + 1;

  function handleSubmit(formData) {
    const newItem = {
      ...formData,
      id: counter,
    }
    setItem([...items, newItem]);
  }

  function handleDelete(id) {
    const newItems = items.filter(item => item.id !== id)
    setItem(newItems)
  }

  function handleChecked(id, checked) {
    const newItems = items.map(item => item.id === id ? { ...item, purchased: checked}: item)
    setItem(newItems)
  }

  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de compras</h1>
        <ShoppingForm onSubmit={(formData) => handleSubmit(formData)} />

        <ul className={styles.itemList}>
          {items.map((item) => (
            <ListItem onCheckedChange={handleChecked} onDelete={handleDelete} key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
