import React from 'react';
import type { AlertBoxProps } from '../../types';

// This component displays a styled alert message.
// It can show different styles based on the alert type.
export const AlertBox: React.FC<AlertBoxProps> = ({
  type,
  message,
  onClose,
  children
}) => {
  // Map each alert type to a set of Tailwind styles.
  // using the current "type" prop later to pick the right style.
  const alertStyles = {
  success: 'bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r-lg',
  error:   'bg-red-50 border-l-4 border-red-500 text-red-800 rounded-r-lg',
  warning: 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-r-lg',
  info:    'bg-blue-50 border-l-4 border-blue-500 text-blue-800 rounded-r-lg',
};
 
  return (
    // Apply shared layout classes plus the style selected by alert type.
    <div
      className={`p-4 border-l-4 ${alertStyles[type]}`}
      style={{ boxShadow: "var(--shadow)" }}
    >
      <div className="flex justify-between items-center " >
        {/* Main alert text from props */}
        <p>{message}</p>
        {/* Only show the close button if an onClose handler was provided */}
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        )}
      </div>
      {/* Optional extra content passed between <AlertBox>...</AlertBox> */}
      {children}
    </div>
  );
};

