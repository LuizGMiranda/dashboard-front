import React from 'react';

interface CustomToastProps {
  message: string;
  type: string;
}

const CustomToast: React.FC<CustomToastProps> = ({message, type}) => {
  return (
    <div className="d-flex fixed-bottom justify-content-center mb-3 w-100">
      <div className={`align-items-center border-0 shadow show text-bg-${type} toast`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex">
          <div className="toast-body">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomToast;