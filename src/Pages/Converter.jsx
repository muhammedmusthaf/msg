import React, { useState } from 'react';
import "../styles/Converter.css";

function Converter() {
  const [m3, setM3] = useState('');
  const [cm3, setCm3] = useState('');
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [bar, setBar] = useState('');
  const [psi, setPsi] = useState('');

  const handleMetersCubedChange = (e) => {
    const value = e.target.value;
    setM3(value);
    setCm3(value ? (parseFloat(value) * 1000000).toString() : '');
  };

  const handleCentimetersCubedChange = (e) => {
    const value = e.target.value;
    setCm3(value);
    setM3(value ? (parseFloat(value) / 1000000).toString() : '');
  };

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value ? ((parseFloat(value) * 9) / 5 + 32).toString() : '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((parseFloat(value) - 32) * 5 / 9).toString() : '');
  };

  const handleBarChange = (e) => {
    const value = e.target.value;
    setBar(value);
    setPsi(value ? (parseFloat(value) * 14.5038).toString() : '');
  };

  const handlePsiChange = (e) => {
    const value = e.target.value;
    setPsi(value);
    setBar(value ? (parseFloat(value) / 14.5038).toString() : '');
  };

  return (
    <div className="converter-container">
      <h2>Unit Converter</h2>

      <div className="conversion-group">
        <label>Meters Cubed (m³):</label>
        <input type="number" value={m3} onChange={handleMetersCubedChange} />
        <label>Centimeters Cubed (cm³):</label>
        <input type="number" value={cm3} onChange={handleCentimetersCubedChange} />
      </div>

      <div className="conversion-group">
        <label>Degrees Celsius (°C):</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
        <label>Degrees Fahrenheit (°F):</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>

      <div className="conversion-group">
        <label>Bar (bar):</label>
        <input type="number" value={bar} onChange={handleBarChange} />
        <label>Pounds per Square Inch (PSI):</label>
        <input type="number" value={psi} onChange={handlePsiChange} />
      </div>
    </div>
  );
}

export default Converter;