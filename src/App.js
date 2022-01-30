import React from "react";
import "./App.css";
import Expenses from "./components/Expenses";

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
  return (
    <div className="expense-list">
      {INITIAL_EXPENSES.map((expense) => {
        return <Expenses key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default App;
