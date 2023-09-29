import styles from "./ShoppingForm.module.css";
import { Plus } from "lucide-react";

function ShoppingForm() {
  return (
    <form className={styles.shoppingForm}>
      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="name">
          Item
        </label>
        <input className={styles.input} type="text" id="name" />
      </div>

      <div className={styles.formControl}>
        <label className={styles.label} htmlFor="quantity">
          Quantidade
        </label>
        <div className={styles.quantityInput}>
          <input className={styles.input} type="number" id="quantity" />
          <select id="unity" className={styles.select}>
            <option value="unidade">Un.</option>
            <option value="litro">Lt.</option>
            <option value="kilograma">Kg.</option>
          </select>
        </div>
      </div>

      <div className={styles.formControl}>
        <label htmlFor="category">Categoria</label>
        <select className={styles.select} id="category">
          <option value="padaria">Padaria</option>
          <option value="legume">Legume</option>
          <option value="carne">Carne</option>
          <option value="fruta">Fruta</option>
          <option value="bebida">Bebida</option>
        </select>
      </div>

      <button type="submit" aria-label="Adicionar item">
        <Plus size={24} />
      </button>
    </form>
  );
}

export default ShoppingForm;
