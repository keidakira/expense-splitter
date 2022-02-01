import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default Input;
