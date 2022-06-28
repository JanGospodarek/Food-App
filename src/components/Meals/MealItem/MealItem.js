import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const { name, description, price } = props;
  const priceFormat = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm></MealItemForm>
      </div>
    </li>
  );
}
export default MealItem;
