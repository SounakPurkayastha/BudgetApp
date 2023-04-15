import ExpenseCard from "./ExpenseCard";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <ul className="expenses-list">
      {expenses.map((expense, i) => (
        <ExpenseCard expense={expense} key={i} />
      ))}
    </ul>
  );
};

export default ExpensesList;
