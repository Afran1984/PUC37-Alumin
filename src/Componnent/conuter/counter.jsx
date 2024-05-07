import { useEffect, useState } from 'react';

const counter = () => {
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(26);
    
    useEffect(() => {
        const countdownInterval = setInterval(() => {
          if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
            clearInterval(countdownInterval);
            // Timer has reached zero
          } else {
            if (seconds === 0) {
              if (minutes === 0) {
                if (hours === 0) {
                  setDays(days - 1);
                  setHours(23);
                  setMinutes(59);
                  setSeconds(59);
                } else {
                  setHours(hours - 1);
                  setMinutes(59);
                  setSeconds(59);
                }
              } else {
                setMinutes(minutes - 1);
                setSeconds(59);
              }
            } else {
              setSeconds(seconds - 1);
            }
          }
        }, 1000);
    
        return () => clearInterval(countdownInterval);
      }, [days, hours, minutes, seconds]);
    
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{days.toString().padStart(2, '0')}</span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{hours.toString().padStart(2, '0')}</span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{minutes.toString().padStart(2, '0')}</span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">{seconds.toString().padStart(2, '0')}</span>
            sec
          </div>
        </div>
      );
    }
export default counter;