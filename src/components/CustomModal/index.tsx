import React from 'react';

interface CustomModalProps {
  title: string;
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, title, onClose, show }) => {
  if (!show) return null;
  return (
    <div className="modal fade show" tabIndex={-1} style={{display: 'block'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          { children }
        </div>
      </div>
    </div>
  );
}

export default CustomModal;