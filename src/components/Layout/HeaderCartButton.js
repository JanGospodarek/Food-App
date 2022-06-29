import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Other/CartIcon";
import styles from "./HeaderCartButton.module.css";
function HeaderCartButton(props) {
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);
  const { button, icon, badge, bump } = styles;
  const ctxData = useContext(CartContext);

  const amount = ctxData.items.reduce((curr, item) => (curr += item.amount), 0);
  const btnClasses = `${button} ${btnIsHighlighted && bump}`;
  useEffect(() => {
    if (ctxData.items.length === 0) return;
    setbtnIsHighlighted(true);
    const timer = setTimeout(() => setbtnIsHighlighted(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctxData.items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={badge}>{amount}</span>
    </button>
  );
}
export default HeaderCartButton;
