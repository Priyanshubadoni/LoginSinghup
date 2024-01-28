import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have some CSS for styling

function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay of 1 second
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup-message ${isVisible ? 'visible' : ''}`}>
      <div className="popup-content">
        <h1>Welcome!</h1>
        <p>We're glad to have you here.</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
