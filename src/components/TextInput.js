import React from "react";
import PropTypes from "prop-types";


const TextInput = ({ label, placeholder, type }) => {
  return (
    <>
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className="input input-password"
      />
    </>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextInput;
