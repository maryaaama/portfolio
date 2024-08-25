import React from 'react';

const ProgressBar = ({ value , color}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className=" h-4 rounded-full"
        style={{ width: `${value}%` , backgroundColor: color}}
      ></div>
    </div>
  );
};

export default ProgressBar;