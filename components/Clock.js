import React, { useEffect, useState } from 'react';

function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Convert to 12-hour format
  if (hours > 12) {
    hours -= 12;
  }

  // Ensure two-digit formatting for hours and minutes
  const hoursInt = hours.toString().padStart(2, '0');
  const minutesInt = minutes.toString().padStart(2, '0');

  const currentTime = `${hoursInt}:${minutesInt}`;
  return currentTime;
}

function Clock() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        opacity: '80%',
        fontSize: '20px',
        position: 'fixed',
        color: 'white',
        bottom: '10px',
        left: '10px',
      }}
    >
      {getCurrentTime()}
    </div>
  );
}

export default Clock;
