import React from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, image, password}) => {
  let inputClass = 'input-wrapper';
  let textInputClass = 'text-input';

  if(error && error.length > 0){
    inputClass += " error-active";
  }

  if(image){
    textInputClass += " image-active";
  }

  return(
    <div className={inputClass}>
      { label ? <label htmlFor={name}>{label}</label> : null }
      <div className="field">
        <input
          type={password ? "password" : "text"}
          name={name}
          className="text-input"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        { error ? <div className="alert">{error}</div> : null }
      </div>
    </div>
  )
};

export default TextInput;