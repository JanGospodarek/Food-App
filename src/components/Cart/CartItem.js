import styles from "./CartItem.module.css";

const CartItem = (props) => {
  console.log(props);

  const price = `$${props.price.toFixed(2)}`;
  const { cart_item, summary, amount, actions } = styles;
  return (
    <li className={cart_item}>
      <div>
        <h2>{props.name}</h2>
        <div className={summary}>
          <span className={price}>{price}</span>
          <span className={amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
