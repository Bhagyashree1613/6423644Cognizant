import React, { useState } from 'react';
import './App.css';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const euro = parseFloat(amount) / 90; // Assuming 1 Euro = 90 INR
    setCurrency(`€ ${euro.toFixed(2)}`);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br /><br />
        <label>Currency:</label>
        <textarea value={currency} readOnly /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const sayWelcome = (message) => {
    alert(`Welcome, ${message}`);
  };

  const handleClick = (e) => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: "30px" }}>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button><br /><br />
      <button onClick={() => sayWelcome("User")}>Say welcome</button><br /><br />
      <button onClick={handleClick}>Click on me</button><br /><br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
