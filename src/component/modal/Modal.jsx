// Modal.js

import React from 'react';
import './styles.css'; // Import your CSS file for styling
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={()=>onClose()}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <button className="close-button" onClick={onClose}><IoClose />
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
