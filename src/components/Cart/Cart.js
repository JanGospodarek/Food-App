import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const { cart_items, total, actions, button__alt, button } = styles;

  const dataCtx = useContext(CartContext);
  const totalAmountFormat = `$${dataCtx.totalAmount.toFixed(2)}`;
  function cartItemAddHandler(item) {
    dataCtx.addItem({ ...item, amount: 1 });
  }
  function cartItemRemoveHandler(id) {
    dataCtx.removeItem(id);
  }
  const cartItems = (
    <ul className={cart_items}>
      {dataCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={total}>
        <span>Total Amount</span>
        <span>{totalAmountFormat}</span>
      </div>
      <div className={actions}>
        <button className={button__alt} onClick={props.hideCartHandler}>
          Close
        </button>
        {dataCtx.items.length > 0 && <button className={button}>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;
