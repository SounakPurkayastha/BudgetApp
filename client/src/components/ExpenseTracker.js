import "./ExpenseTracker.css";
import ExpenseBar from "./ExpenseBar";

const ExpenseTracker = ({ budget }) => {
  const percentage = (budget.currentExpenditure / budget.expenseLimit) * 100;

  console.log(percentage);

  return (
    <div className="expense-tracker">
      <ExpenseBar percent={percentage} />
    </div>
  );
};

export default ExpenseTracker;
