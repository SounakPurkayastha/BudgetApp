import { useState } from "react";

const ExpenseForm = ({ onAddExpense, onClose }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);
  const priceChangeHandler = (event) => setPrice(event.target.value);

  const addExpenseHandler = () => {
    const newExpense = {
      title: title,
      price: price,
      date: date,
    };
    onAddExpense(newExpense);
    setTitle("");
    setDate("");
    setPrice("");
    onClose();
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <label>Title</label>
      <input type="text" value={title} onChange={titleChangeHandler} />
      <label>Date</label>
      <input type="text" value={date} onChange={dateChangeHandler} />
      <label>Price</label>
      <input type="text" value={price} onChange={priceChangeHandler} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
