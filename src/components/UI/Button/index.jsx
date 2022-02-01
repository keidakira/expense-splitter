import styles from "./Button.module.css";

const Button = (props) => {
  let classes = [styles["button"]];

  if (props.variant === "outlined") {
    classes.push(styles["button--outlined"]);
  }

  const classNames = classes.join(" ");

  return (
    <button onClick={props.onClick} className={classNames}>
      {props.title}
    </button>
  );
};

export default Button;
