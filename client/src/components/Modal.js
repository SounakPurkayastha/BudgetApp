import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ open, onClose, onAddExpense }) => {
  const addExpenseHandler = () => {
    onAddExpense({
      title: "Weed",
      price: "40.00",
      date: "15-04-2023",
    });
    onClose();
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose}>Close</button>
        <button onClick={addExpenseHandler}>Add expense</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
