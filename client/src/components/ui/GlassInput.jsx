import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const GlassInput = ({ name, type, placeholder, value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      VanillaTilt.init(inputRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <div ref={inputRef} className="glass-input">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="glass-input-field"
      />
    </div>
  );
};

export default GlassInput;
