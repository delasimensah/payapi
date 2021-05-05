import React from "react";

const TextInput = ({ type, placeholder, onChange, value, name, error }) => {
  return (
    <div className="">
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-transparent border-0 border-b cursor-pointer border-sjBlue focus:border-0 focus:ring-0 focus:border-sjBlue ${
            error ? "border-charmPink placeholder-charmPink" : "border-sjBlue "
          }`}
        ></textarea>
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          className={`w-full bg-transparent border-0 border-b cursor-pointer focus:border-0 focus:ring-0 focus:border-sjBlue ${
            error ? "border-charmPink placeholder-charmPink" : "border-sjBlue "
          }`}
          placeholder={placeholder}
        />
      )}
      {error && <p className="px-2 mt-3 text-sm text-charmPink">{error}</p>}
    </div>
  );
};

export default TextInput;
