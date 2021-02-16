import { FC, useEffect } from 'react';
import React from 'react';

import './timer.css';

interface TimerProps {
  initialCount?: number;
}

const Timer: FC<TimerProps> = ({ initialCount = 0}) => {
  const [counter, useCount] = React.useState(() => initialCount);
  const [playing, togglePlaying] = React.useState(() => false);
  console.log(initialCount);
  

  useEffect(() => {
    let interval: any;
    if (playing) {
      interval = setInterval(() => useCount(counter + 1), 1000);
    }

    return () => clearInterval(interval);
  }, [counter, playing]);
  return (
    <>
      <div className="display">{counter}</div>
      <div className="button-group commands">
        <button className="play" onClick={() => togglePlaying(true)}>
          <i className="las la-play"></i>
        </button>
        <button className="pause" onClick={() => togglePlaying(false)}>
          <i className="las la-pause"></i>
        </button>
      </div>
    </>
  );
};
export { Timer };
