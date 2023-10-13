import { useRef, useState } from "react";
import styles from "./ShoppingForm.module.css";
import { Plus } from "lucide-react";

function ShoppingForm({ onSubmit }) {
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  let [name, setName] = useState("");
  let [unity, setUnity] = useState("unidade");
  let [quantity, setQuantity] = useState("");
  let [category, setCategory] = useState("padaria");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      quantity,
      unity,
      category,
    };

    await onSubmit(formData);
    setIsLoading(false);

    //Reseting the form
    setName("");
    setQuantity("");
    setUnity("unidade");
    setCategory("padaria");

    inputRef.current?.focus();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.shoppingForm}>
      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="name">
          Item
        </label>
        <input
          className={styles.input}
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          placeholder="Banana"
          minLength={2}
        />
      </div>

      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="quantity">
          Quantidade
        </label>
        <div className={styles.quantityInput}>
          <input
            className={styles.input}
            type="number"
            id="quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            required
            min={1}
          />
          <select
            id="unity"
            className={styles.select}
            value={unity}
            onChange={(event) => setUnity(event.target.value)}
            required
          >
            <option value="unidade">Un.</option>
            <option value="litro">Lt.</option>
            <option value="kilograma">Kg.</option>
          </select>
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="category">Categoria</label>
        <select
          className={styles.select}
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="padaria">Padaria</option>
          <option value="legume">Legume</option>
          <option value="carne">Carne</option>
          <option value="fruta">Fruta</option>
          <option value="bebida">Bebida</option>
        </select>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        aria-label="Adicionar item"
        disabled={isLoading}
      >
        <Plus size={24} />
      </button>
    </form>
  );
}

export default ShoppingForm;
