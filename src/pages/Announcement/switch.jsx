import React, { useState } from "react";

const Switch = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={toggleSwitch}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            className={`${
              checked ? "bg-blue-500" : "bg-white"
            } absolute left-0 top-0 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">Toggle</div>
      </label>
    </div>
  );
};

export default Switch;
