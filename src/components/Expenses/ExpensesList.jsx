import Expenses from ".";

const ExpensesList = (props) => {
  const { data } = props;

  return (
    <div className="expense-list">
      {data.map((expense) => {
        return <Expenses key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

export default ExpensesList;
