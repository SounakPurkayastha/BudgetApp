import "./ExpenseBar.css";

const ExpenseBar = ({ percent }) => {
  const fillPercent = percent < 99.5 ? percent : 99.5;

  const fillColor = percent <= 100 ? "green" : "red";

  return (
    <div className="expense-bar">
      <div
        className="filling"
        style={{
          width: `${fillPercent.toString()}%`,
          backgroundColor: `${fillColor}`,
        }}
      ></div>
    </div>
  );
};

export default ExpenseBar;
