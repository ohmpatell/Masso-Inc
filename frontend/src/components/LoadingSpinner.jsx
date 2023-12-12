// LoadingSpinner.jsx
import React from "react";
import "./LoadingSpinner.css"; // Import a separate CSS file for styling

const LoadingSpinner = () => {
    console.log("LoadingSpinner.jsx: LoadingSpinner() called");
  return (
    <div className="loading-spinner-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
