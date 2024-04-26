import React, { useState, useEffect } from 'react';

const Popup = () => {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>Execution Completed. You can check in Accuracy tab.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      </div>
    );
  };
  export default Popup;