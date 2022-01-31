import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./index.css";

const NewExpense = (props) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="new-expense">
      <div className="new-expense__container">
        <Input
          value={description}
          placeholder="Expense"
          style={{
            width: "100%",
          }}
          onChange={descriptionChangeHandler}
        />
        <Input
          value={price}
          placeholder="Price"
          style={{
            textAlign: "right",
            width: "50%",
          }}
          type="text"
          onChange={priceChangeHandler}
        />
        <Button
          title="Add Expense"
          onClick={() => {
            props.onAddExpense({
              description,
              price: parseFloat(price),
            });

            setDescription("");
            setPrice("");
          }}
        />
      </div>
    </div>
  );
};

export default NewExpense;
