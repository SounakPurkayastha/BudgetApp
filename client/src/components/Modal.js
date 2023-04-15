import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
