import "./Modal.css";
import ReactDOM from "react-dom";
import ExpenseForm from "./ExpenseForm";

const Modal = ({ open, onClose, onAddExpense }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <ExpenseForm onAddExpense={onAddExpense} onClose={onClose} />
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
