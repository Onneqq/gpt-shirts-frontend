import React, { useState } from 'react';

interface Props {
  buttonText: string;
  onLoginSuccess: () => void;
}

const GoogleLoginButton: React.FC<Props> = ({ buttonText, onLoginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setIsLoading(true);

    // Code to log in to Google would go here...
    // Once logged in, call the onLoginSuccess callback to notify the parent component.
    onLoginSuccess();
  };

  return (
    <button onClick={handleLoginClick} disabled={isLoading}>
      {isLoading ? 'Logging in...' : buttonText}
    </button>
  );
};

export default GoogleLoginButton;