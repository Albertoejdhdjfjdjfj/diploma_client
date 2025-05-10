import React from 'react';
import './PopUpWindow.css';

const PopUpWindow = ({ content }: { content: string }) => {
  return (
    <div className="popUpWindow">
      <p>{content}</p>
    </div>
  );
};

export default PopUpWindow;
