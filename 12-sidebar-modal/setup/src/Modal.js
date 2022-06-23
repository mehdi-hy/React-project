import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : null} `}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button
          className='close-modal-btn'
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
