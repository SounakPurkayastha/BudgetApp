import ExpensesList from "./ExpensesList";
import Modal from "./Modal";
import { useState } from "react";
import "./ExpensesListContainer.css";

const ExpensesListContainer = ({ expenses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <button className="expense-button" onClick={openModal}>
        + Add New Expense
      </button>
      <Modal open={isOpen} onClose={closeModal} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default ExpensesListContainer;
