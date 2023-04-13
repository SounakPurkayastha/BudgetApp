import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li>{expense.title}</li>
      ))}
    </ul>
  );
};

export default ExpensesList;
