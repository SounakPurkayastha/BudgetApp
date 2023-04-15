import "./ExpenseCard.css";

const ExpenseCard = ({ expense }) => {
  return (
    <div className="expense-card">
      <p className="expense-title">{expense.title}</p>
      <p className="expense-date">{expense.date}</p>
      <p className="expense-price">${expense.price}</p>
    </div>
  );
};

export default ExpenseCard;
