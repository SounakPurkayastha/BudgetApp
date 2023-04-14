import ExpensesList from "./ExpensesList";
import "./ExpensesListContainer.css";

const ExpensesListContainer = ({ expenses }) => {
  return (
    <div>
      <button className="expense-button"> + Add Expense</button>
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default ExpensesListContainer;
