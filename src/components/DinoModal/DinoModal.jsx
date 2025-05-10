import React from "react";
import "./DinoModal.css";


// DinoModal components that is populated by the modalConfig array
export function DinoModal({ onClose, currentInfo, isOpen }) {
  function handleClose(event) {
    if (event.target.classList.contains("modal")) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleClose}
      className={`${isOpen ? "modal modal_is-open" : "modal"}`}
    >
      <div className="modal__content">
        <button onClick={onClose} className="modal__close">
        </button>
        <h1 className="modal__content_title">{currentInfo.title}</h1>
        <p className="modal__content_description">{currentInfo.description}</p>
        <img
          className="modal__content_image"
          src={currentInfo.image}
          alt="Dinosaur"
        />
      </div>
    </div>
  );
}
