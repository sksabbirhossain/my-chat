import React from "react";

export const FormInput = ({
  label,
  type,
  name,
  placeholder,
  className,
  ...rest
}) => {
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
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`${className} border-2 border-gray-300 focus:outline-orange-600 rounded px-1 py-2 w-full`}
        {...rest}
      />
    </div>
  );
};
