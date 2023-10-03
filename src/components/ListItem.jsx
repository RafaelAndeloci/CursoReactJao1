import styles from "./ListItem.module.css";
import { Trash2 } from "lucide-react";

function ListItem({ item }) {
  return (
    <li className={styles.item}>
      <input type="checkbox" defaultChecked={item.purchased} />

      <div>
        <p>{item.name}</p>
        <span>
          {item.quantity} {item.unity}
        </span>
      </div>

      <span>{item.category}</span>

      <button>
        <Trash2 size={16} />
      </button>
    </li>
  );
}

export default ListItem;
