import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ErrorModal from "./ErrorModal";
import "./index.css";

const NewExpense = (props) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("2022-01-01");

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const addExpenseHandler = () => {
    if (description.trim() === "") {
      setError(true);
      setErrorMessage("Please enter a description");
      return;
    } else if (price.trim() === "") {
      setError(true);
      setErrorMessage("Please enter a price");
      return;
    } else if (isNaN(price)) {
      setError(true);
      setErrorMessage("Please enter a valid price");
      return;
    } else if (price <= 0) {
      setError(true);
      setErrorMessage("Please enter a price greater than 0");
      return;
    }

    props.onAddExpense({
      description,
      price: parseFloat(price),
      date: date,
    });

    setDescription("");
    setPrice("");
    setDate("");
  };

  const closeModalHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
      <ErrorModal
        error={error}
        errorMessage={errorMessage}
        actionPressed={closeModalHandler}
      />
      <div className="new-expense">
        <div className="new-expense__container">
          <div className="new-expense__inputs">
            <Input
              value={description}
              placeholder="Expense"
              onChange={descriptionChangeHandler}
            />
            <Input
              value={price}
              placeholder="Price"
              type="text"
              onChange={priceChangeHandler}
            />
            <Input value={date} type="date" onChange={dateChangeHandler} />
          </div>
          <div className="new-expense__button">
            <Button
              title="ADD EXPENSE"
              onClick={addExpenseHandler}
              variant="contained"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewExpense;
