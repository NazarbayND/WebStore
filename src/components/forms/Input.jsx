import React from "react";

const Input = ({ name, placeholder, error, type = "text", ...rest }) => {
  return (
    <div className="form-group">
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        className={`input input--primary ${error && "input--danger"}`}
        {...rest}
      />
      <p className="text text--danger">{error}</p>
    </div>
  );
};

export default Input;
