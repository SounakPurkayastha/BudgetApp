import "./ExpenseCard.css";

const ExpenseCard = ({ expense }) => {
  return (
    <div class="expense-card">
      <p class="expense-title">{expense.title}</p>
      <p class="expense-date">{expense.date}</p>
      <p class="expense-price">${expense.price}</p>
    </div>
  );
};

export default ExpenseCard;
