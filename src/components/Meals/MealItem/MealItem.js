import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem(props) {
  const ctxData = useContext(CartContext);

  const { name, description, price, id } = props;
  const priceFormat = `$${price.toFixed(2)}`;
  function addToCartHandler(amount) {
    ctxData.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceFormat}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
}
export default MealItem;
