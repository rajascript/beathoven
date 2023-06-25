import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => {
            let sec = +prevSeconds - 1;
            if (sec < 10) {
              return '0' + sec;
            }
            return sec;
          });
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => {
              let min = +prevMinutes - 1;
              if (min < 10) {
                return '0' + min;
              }
              return min;
            });
            setSeconds(59);
          } else {
            // Timer has reached 0
            setIsRunning(false);
            clearInterval(interval);
            if (document) {
              const audio = new Audio();
              audio.src = '/sound.mp3';
              audio.play();
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(30);
    setSeconds(0);
  };

  const handleMinutesChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setMinutes(value >= 0 ? value : 0);
  };

  const handleSecondsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setSeconds(value >= 0 ? value : 0);
  };

  return (
    <div style={{ color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ color: 'white' }}>
          <input
            style={{
              padding: '10px',
              margin: '30px 15px 30px 0',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              width: '220px',
              fontSize: '100px',
              border: 'none',
              outline: 'none',
              textAlign: 'center',
            }}
            value={minutes}
            onChange={handleMinutesChange}
          />
        </label>
        <label style={{ color: 'white' }}>
          <input
            style={{
              padding: '10px',
              margin: '30px 0 30px 15px',
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              width: '220px',
              fontSize: '100px',
              border: 'none',
              outline: 'none',
              textAlign: 'center',
            }}
            value={seconds}
            onChange={handleSecondsChange}
          />
        </label>
      </div>
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
            cursor: 'pointer',
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
          onClick={startTimer}
        >
          Start
        </button>
        <button
          style={{
            margin: '10px',
            cursor: 'pointer',
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
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          style={{
            margin: '10px',
            cursor: 'pointer',
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
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
