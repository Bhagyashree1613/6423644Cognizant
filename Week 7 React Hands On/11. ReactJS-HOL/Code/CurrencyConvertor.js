import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const euroValue = parseFloat(rupees) / 88.41;
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div style={{ margin: '30px' }}>
      <h2>Currency Converter (INR to EUR)</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros && <p>EUR: €{euros}</p>}
    </div>
  );
}

export default CurrencyConvertor;
