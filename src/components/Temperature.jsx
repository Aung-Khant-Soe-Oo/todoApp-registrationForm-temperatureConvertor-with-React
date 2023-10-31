import React, { useState } from "react";
const Temperature = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  // Handle Celsius input change
  const handleCelsiusChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setCelsius(value);
      const convertedFahrenheit = (value * 9) / 5 + 32;
      setFahrenheit(convertedFahrenheit);
    } else {
      setCelsius("");
      setFahrenheit("");
    }
  };

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setFahrenheit(value);
      const convertedCelsius = ((value - 32) * 5) / 9;
      setCelsius(convertedCelsius);
    } else {
      setCelsius("");
      setFahrenheit("");
    }
  };

  return (
    <div className="temp-container">
      <h2>Temperature Convertor</h2>
      <div className="temp-input-wrapper">
        <input
          type="text"
          name="cels"
          id="cels"
          value={celsius}
          onChange={handleCelsiusChange}
        />
        <span>&deg;C</span>
      </div>
      <div className="temp-input-wrapper">
        <input
          type="text"
          name="fah"
          id="fah"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
        <span>&deg;F</span>
      </div>
    </div>
  );
};

export default Temperature;
