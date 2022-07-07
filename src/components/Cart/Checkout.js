import { useRef, useState } from "react";
import styles from "./Checkout.module.css";
function isEmpty(value) {
  return value.trim() === "";
}
function isNotFiveChars(value) {
  return value.trim().length !== 5;
}
function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  function confirmHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    // const enteredNameIsValid = !isEmpty(enteredName);
    // const enteredStreetIsValid = !isEmpty(enteredStreet);
    // const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
    // const enteredCityIsValid = !isEmpty(enteredCity);
    setFormInputsValidity({
      name: !isEmpty(enteredName),
      city: !isEmpty(enteredCity),
      postalCode: !isNotFiveChars(enteredPostal),
      street: !isEmpty(enteredStreet),
    });
    if (
      !(
        !isEmpty(enteredName) &&
        !isEmpty(enteredStreet) &&
        !isNotFiveChars(enteredPostal) &&
        !isEmpty(enteredCity)
      )
    ) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  }
  const nameClasses = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const streetClasses = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;
  const postalClasses = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  }`;
  const cityClasses = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;
  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postatl code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
        {!formInputsValidity.postalCode && <p>Please enter valid postal</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
}
export default Checkout;
