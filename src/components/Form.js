import React from "react";

export const Form = ({ children, className, ...rest }) => {
  return (
    <form className={className} {...rest}>
      {children}
    </form>
  );
};
