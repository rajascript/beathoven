import React, { useState } from 'react';

const Counter = ({ isSoundOn }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    if (document && isSoundOn) {
      const audio = new Audio();
      audio.src = '/click.mp3';
      audio.play();
    }
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
            cursor: 'pointer',
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
            cursor: 'pointer',
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
            cursor: 'pointer',
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
