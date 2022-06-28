import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

function Cart(props) {
  const { cart_items, total, actions, button__alt, button } = styles;
  const { items } = useContext(CartContext);

  const cartItems = (
    <ul className={cart_items}>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={actions}>
        <button className={button__alt} onClick={props.hideCartHandler}>
          Close
        </button>
        <button className={button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;
