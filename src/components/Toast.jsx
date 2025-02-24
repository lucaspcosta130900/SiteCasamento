import React from 'react';
import '../styles/Toast.css';

function Toast({ message, type = 'success', onClose }) {
  return (
    <div className={`toast-container ${type}`}>
      <div className="toast-content">
        <p>{message}</p>
        <button onClick={onClose} className="toast-close">×</button>
      </div>
    </div>
  );
}

export default Toast; 