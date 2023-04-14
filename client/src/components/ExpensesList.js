import ExpenseCard from "./ExpenseCard";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseCard expense={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
