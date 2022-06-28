import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Other/CartIcon";
import styles from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const { button, icon, badge } = styles;
  const ctxData = useContext(CartContext);

  const amount = ctxData.items.reduce((curr, item) => (curr += item.amount), 0);
  return (
    <button className={button} onClick={props.onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badge}>{amount}</span>
    </button>
  );
}
export default HeaderCartButton;
