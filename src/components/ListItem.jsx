import { useState } from "react";
import styles from "./ListItem.module.css";
import { Apple, Beef, CakeSlice, Carrot, Milk, Trash2 } from "lucide-react";

function ListItem({ item, onDelete, onCheckedChange }) {
  function handleChange(event) {
    onCheckedChange(item.id, event.target.checked);
  }

  return (
    <li className={styles.item}>
      <input type="checkbox" checked={item.purchased} onChange={handleChange} />

      <div>
        <p>{item.name}</p>
        <span>
          {item.quantity} {item.quantity > 1 ? item.unity + "s" : item.unity}
        </span>
      </div>

      <CategoryTag category={item.category} />

      <button onClick={() => onDelete(item.id)}>
        <Trash2 size={16} />
      </button>
    </li>
  );
}

const icons = {
  padaria: CakeSlice,
  legume: Carrot,
  fruta: Apple,
  bebida: Milk,
  carne: Beef,
};

function CategoryTag({ category }) {
  const Icon = icons[category];

  return (
    <span className={styles.category} data-category={category}>
      <Icon size={16} />
      {category}
    </span>
  );
}

export default ListItem;
