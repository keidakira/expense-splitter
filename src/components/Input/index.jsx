import "./index.css";

const Input = (props) => {
  return (
    <input
      value={props.value}
      placeholder={props.placeholder}
      style={props.style}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default Input;
