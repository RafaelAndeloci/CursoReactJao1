import styles from "./App.module.css";
import bgImage from "./assets/bg-image.jpg";
import ShoppingForm from "./components/ShoppingForm";
import ListItem from "./components/ListItem";

const items = [
  {
    id: 1,
    name: "Banana",
    category: "frutas",
    quantity: 10,
    unity: "unidade",
    purchased: false,
  },
  {
    id: 2,
    name: "Coquinha xelada",
    category: "bebidas",
    quantity: 20,
    unity: "unidade",
    purchased: false,
  },
  {
    id: 3,
    name: "Bifão de rato",
    category: "carnes",
    quantity: 10,
    unity: "Kilos",
    purchased: false,
  },
  {
    id: 4,
    name: "Legumão grosso",
    category: "legume",
    quantity: 10,
    unity: "unidade",
    purchased: false,
  },
];

function App() {
  return (
    <div>
      <header className={styles.header}>
        <img height={185} src={bgImage} alt="" role="presentation" />
      </header>

      <main className={styles.main}>
        <h1>Lista de compras</h1>
        <ShoppingForm />

        <ul className={styles.itemList}>
          {items.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
