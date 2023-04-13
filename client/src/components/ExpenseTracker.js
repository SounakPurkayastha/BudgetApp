import "./ExpenseTracker.css";
import ExpenseBar from "./ExpenseBar";

const ExpenseTracker = ({ percentage }) => {
  return (
    <div className="expense-tracker">
      <ExpenseBar percent={percentage} />
    </div>
  );
};

export default ExpenseTracker;
