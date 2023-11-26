import React from "react";

export const TextArea = ({ label, name, placeholder, className, ...rest }) => {
  return (
    <div className="block space-y-2 pt-3">
      <div>
        <label
          htmlFor=""
          className="text-base font-normal text-gray-600 capitalize"
        >
          {label}
        </label>
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`${className} border-2 border-gray-300 focus:outline-orange-600 rounded px-1 py-2 w-full`}
        {...rest}
        rows="3"
      ></textarea>
    </div>
  );
};
