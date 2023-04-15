import "./AppContainer.css";
import ExpenseTracker from "./ExpenseTracker";
import BudgetList from "./BudgetList";
import ExpensesListContainer from "./ExpensesListContainer";

const AppContainer = ({ budget, onAddExpense }) => {
  return (
    <div className="container">
      <BudgetList />
      <ExpenseTracker budget={budget} />
      <ExpensesListContainer
        expenses={budget.expenses || []}
        onAddExpense={onAddExpense}
      />
    </div>
  );
};

export default AppContainer;
