import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
function MealItemForm(props) {
  const [amountValid, setAmountValid] = useState(true);
  const amountInputRef = useRef();
  function submitHandler(e) {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNum);
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
      {!amountValid && <p>Enter a valid amount!</p>}
    </form>
  );
}
export default MealItemForm;
