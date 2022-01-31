import React, { useState } from "react";
import "./App.css";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    description: "Gum",
    price: 0.99,
  },
  {
    id: 2,
    description: "Rent",
    price: 435,
  },
  {
    id: 3,
    description: "Indian Market",
    price: 64.99,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const createExpense = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={createExpense} />
      <ExpensesList data={expenses} />
    </div>
  );
};

export default App;
