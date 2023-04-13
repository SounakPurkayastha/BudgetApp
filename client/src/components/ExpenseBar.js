import "./ExpenseBar.css";

const ExpenseBar = ({ percent }) => {
  return (
    <div className="expense-bar">
      <div
        className="filling"
        style={{ width: `${percent.toString()}%` }}
      ></div>
    </div>
  );
};

export default ExpenseBar;
