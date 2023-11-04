import React, { useState } from 'react';
import './App.css';

function App() {
  const [otp, setOtp] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>OTP Generator</h1>
        <div className="otp-container">
          {Array.from({ length: 4 }, (_, index) => (
            <input
              key={index}
              type="text"
              className="otp-input"
              value={otp[index] || ''}
              onChange={handleChange}
            />
          ))}
        </div>
        <button className="generate-button" onClick={() => setOtp(generateOtp())}>
          Generate OTP
        </button>
      </header>
    </div>
  );
}

function generateOtp() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export default App;