import React, { useState } from 'react';

const App = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
  
    const convertToCelsius = (f) => ((f - 32) * 5) / 9;
    const convertToFahrenheit = (c) => (c * 9) / 5 + 32;
  
    const handleCelsiusChange = (e) => {
      const c = e.target.value;
      setCelsius(c);
      setFahrenheit(c ? convertToFahrenheit(c).toFixed(2) : '');
    };
  
    const handleFahrenheitChange = (e) => {
      const f = e.target.value;
      setFahrenheit(f);
      setCelsius(f ? convertToCelsius(f).toFixed(2) : '');
    };
  

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div style={{marginBottom:"10px"}}>
        <label style={{marginRight:"20px"}}>Celsius: </label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  )
}

export default App