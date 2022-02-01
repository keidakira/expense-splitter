import "./Expenses.css";

const Expenses = (props) => {
  const { expense } = props;

  const formatDate = (date) => {
    // If date is delimited by -, then it is one day off in JS
    // So, replace it with /
    date = date.replace(/-/g, "/");

    const dateObj = new Date(date);

    // Needed format is Month day, Year => Jan 1, 2022
    const options = { year: "numeric", month: "short", day: "numeric" };

    // Date language should be in English so en-US
    return dateObj.toLocaleDateString("en-US", options);
  };

  return (
    <div className="expense">
      <div className="expense__item">
        <p className="expense__item-date">{formatDate(expense.date)}</p>
        <p className="expense__item-name">{expense.description}</p>
        <p className="expense__item-price">$ {expense.price}</p>
      </div>
    </div>
  );
};

export default Expenses;
