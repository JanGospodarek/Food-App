import React from "react";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
  const { cart_items, total, actions, button__alt, button } = styles;
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const dataCtx = useContext(CartContext);
  const totalAmountFormat = `$${dataCtx.totalAmount.toFixed(2)}`;
  function cartItemAddHandler(item) {
    dataCtx.addItem({ ...item, amount: 1 });
  }
  function cartItemRemoveHandler(id) {
    dataCtx.removeItem(id);
  }
  function orderHandler() {
    setCheckoutMode(true);
  }
  async function submitOrderHandler(userData) {
    try {
      setIsSubmitting(true);
      const res = await fetch(
        "https://gowno-b3287-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: userData, orderedItems: dataCtx.items }),
        }
      );
      if (!res.ok) throw new Error("Something went wrong!");
      setDidSubmit(true);
      dataCtx.clearCart();
    } catch (error) {
      setSubmitError(error.message);
    }
    setIsSubmitting(false);
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
  const modalActions = (
    <div className={actions}>
      <button className={button__alt} onClick={props.hideCartHandler}>
        Close
      </button>
      {dataCtx.items.length > 0 && (
        <button onClick={orderHandler} className={button}>
          Order
        </button>
      )}
    </div>
  );
  const cartModalCont = (
    <React.Fragment>
      {cartItems}
      <div className={total}>
        <span>Total Amount</span>
        <span>{totalAmountFormat}</span>
      </div>

      {checkoutMode && (
        <Checkout
          onConfirm={submitOrderHandler}
          onCancel={props.hideCartHandler}
        ></Checkout>
      )}
      {!checkoutMode && modalActions}
    </React.Fragment>
  );
  const isSubmittingModalCont = <p>Sending order data...</p>;
  const submitErrorModalCont = <p>{submitError}</p>;
  const didSubmitModalCont = <p>Successfully ordered!</p>;
  return (
    <Modal onClose={props.hideCartHandler}>
      {!isSubmitting && !didSubmit && !submitError && cartModalCont}
      {isSubmitting && isSubmittingModalCont}
      {submitError && submitErrorModalCont}
      {didSubmit && !isSubmitting && didSubmitModalCont}
    </Modal>
  );
}
export default Cart;
