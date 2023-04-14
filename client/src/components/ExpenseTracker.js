import "./ExpenseTracker.css";
import ExpenseBar from "./ExpenseBar";

const ExpenseTracker = ({ budget }) => {
  const percentage = (budget.currentExpenditure / budget.expenseLimit) * 100;

  const colorScheme = percentage < 100 ? "#cfc" : "#fcc";
  const textColor = percentage < 100 ? "green" : "red";

  return (
    <div className="expense-tracker" style={{ backgroundColor: colorScheme }}>
      <p className="budget-title" style={{ color: textColor }}>
        {budget.title}
      </p>
      <p className="budget-expenditure" style={{ color: textColor }}>
        ${budget.currentExpenditure} / ${budget.expenseLimit}
      </p>
      <p className="expenditure-percentage" style={{ color: textColor }}>
        {percentage.toFixed(0)}%
      </p>
      <ExpenseBar percent={percentage} />
    </div>
  );
};

export default ExpenseTracker;
