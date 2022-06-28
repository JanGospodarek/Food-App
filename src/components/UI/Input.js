import styles from "./Input.module.css";
function Input(props) {
  const { input, label } = props;
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input}></input>
    </div>
  );
}
export default Input;
