import "./AppContainer.css";
import ExpenseTracker from "./ExpenseTracker";

const AppContainer = ({ budget }) => {
  return (
    <div className="container">
      <ExpenseTracker budget={budget} />
    </div>
  );
};

export default AppContainer;
