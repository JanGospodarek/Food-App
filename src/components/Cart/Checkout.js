import styles from "./Checkout.module.css";
function Checkout(props) {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postatl code</label>
        <input type="text" id="postal"></input>
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city"></input>
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>

      <button>Confirm</button>
    </form>
  );
}
export default Checkout;
