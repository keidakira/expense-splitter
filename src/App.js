import React, { useState } from "react";
import "./App.css";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: 1,
    description: "Gum",
    price: 0.99,
    date: "2022-02-01",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const createExpense = (expense) => {
    setExpenses((prevState) => {
      expense.id = prevState.length + 1;

      return [...prevState, expense];
    });
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={createExpense} />
      <ExpensesList data={expenses} />
    </div>
  );
};

export default App;
