import "./AppContainer.css";
import ExpenseTracker from "./ExpenseTracker";
import ExpensesList from "./ExpensesList";

const AppContainer = ({ budget }) => {
  const percentage = (budget.currentExpenditure / budget.expenseLimit) * 100;

  return (
    <div className="container">
      <ExpenseTracker percentage={percentage} />
      <ExpensesList expenses={budget.expenses || []} />
    </div>
  );
};

export default AppContainer;
