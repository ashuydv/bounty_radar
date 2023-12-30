import React from 'react';

interface ErrorMessageProps {
  errors: {
    [key: string]: string;
  };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
  return (
    <div>
      {Object.keys(errors).map((fieldName, index) => (
        <p key={index} className="error-message">
          {errors[fieldName]}
        </p>
      ))}
    </div>
  );
};

export default ErrorMessage;
