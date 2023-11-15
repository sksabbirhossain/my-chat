import React from "react";

export const Button = ({ name, className, ...rest }) => {
  return (
    <button
      type="submit"
      className={`${className} bg-orange-600 hover:bg-orange-500 text-white  border-2 border-orange-600 hover:border-orange-500 rounded px-2 py-2 duration-150 ease-out`}
      {...rest}
    >
      {name}
    </button>
  );
};
