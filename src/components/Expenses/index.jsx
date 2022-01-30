const Expenses = (props) => {
  const { expense } = props;

  return (
    <div className="expense">
      <p className="expense__item-name">{expense.description}</p>
      <p className="expense__item-price">$ {expense.price}</p>
    </div>
  );
};

export default Expenses;
