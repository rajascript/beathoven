import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2
        style={{
          color: 'white',
          width: '220px',
          fontSize: '100px',
          border: 'none',
          outline: 'none',
          textAlign: 'center',
        }}
      >
        {count}
      </h2>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          style={{
            margin: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#000000',
            outline: 'none',
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
            width: '150px',
            letterSpacing: '1px',
          }}
          onClick={increment}
        >
          +
        </button>
        <button
          style={{
            margin: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#000000',
            outline: 'none',
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
            width: '150px',
            letterSpacing: '1px',
          }}
          onClick={decrement}
        >
          -
        </button>
        <button
          style={{
            margin: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#000000',
            outline: 'none',
            border: 'none',
            borderRadius: '8px',
            padding: '20px',
            width: '150px',
            letterSpacing: '1px',
          }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
