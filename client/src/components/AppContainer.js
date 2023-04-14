import "./AppContainer.css";
import ExpenseTracker from "./ExpenseTracker";
import BudgetList from "./BudgetList";

const AppContainer = ({ budget }) => {
  return (
    <div className="container">
      <BudgetList />
      <ExpenseTracker budget={budget} />
    </div>
  );
};

export default AppContainer;
