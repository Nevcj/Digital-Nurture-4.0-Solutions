import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(5);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleWelcomeClick = () => {
    alert('welcome');
  };

  const handleClick = () => {
    alert('I was clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Converting ${amount} to ${currency}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <br /><br />
      <button onClick={handleWelcomeClick}>Say welcome</button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>
      <br /><br />

      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Currency:
          <textarea
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
