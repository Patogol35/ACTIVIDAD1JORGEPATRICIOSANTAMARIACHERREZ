import React from "react";

const FormInput = ({ label, type, id, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id}>{label}:</label><br></br>
      <input
        type={type}
        className="inputestilo"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
