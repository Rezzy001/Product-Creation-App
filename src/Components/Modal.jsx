const Modal = ({onClose}) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <p className="modal-text">Product created successfully!</p>
        <button className="submit-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;