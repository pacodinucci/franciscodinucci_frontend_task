import React, { useState } from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer mb-1">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`block w-10 h-6 rounded-full ${
            checked
              ? "bg-gradient-to-r from-[#8C57EA] to-[#5570E8]"
              : "bg-gray-200"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
            checked ? "transform translate-x-full bg-white" : ""
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
