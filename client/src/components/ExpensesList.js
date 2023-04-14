import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <div>
      <button>Add Expense</button>
      <ul>
        {expenses.map((expense) => (
          <li>{expense.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
