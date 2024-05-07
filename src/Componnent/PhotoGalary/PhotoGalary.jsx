import { Helmet } from "react-helmet-async";
import counter from "../conuter/counter";
import { useEffect, useState } from 'react';


const PhotoGalary = () => {
    const [days, setDays] = useState(30);
    const [hours, setHours] = useState(11);
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
        <div>
            <Helmet>
                <title>অনবদ্য-৩৭ | PhotoGalary</title>
            </Helmet>
            {/* conuter timer */}
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <p>Next Update Time!</p>
  </div>
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
  
</div>
                    
            <div className="grid grid-cols-3 gap-3 mt-4 mb-4">
                {/* 01 */}
                    <div className="card w-100 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/14.jpg" alt="404" /></figure>
                    </div>
                {/* 02 */}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/15.jpg" alt="404" /></figure>
                    </div>
                {/* 03 */}
                <div className="card w-100 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/16.jpg" alt="404" /></figure>
                    </div>
                {/* 04 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/08.jpg" alt="404" /></figure>
                    </div>
                {/* 05 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/03.jpg" alt="404" /></figure>
                    </div>
                {/* 06 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/17.jpg" alt="404" /></figure>
                    </div>
                {/* 07 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/10.jpg" alt="404" /></figure>
                    </div>
                {/* 08 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/11.jpg" alt="404" /></figure>
                    </div>
                {/* 09 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/12.jpg" alt="404" /></figure>
                    </div>
                {/* 10 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/04.jpg" alt="404" /></figure>
                    </div>
                {/* 11 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/05.jpg" alt="404" /></figure>
                    </div>
                {/* 12 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/02.jpg" alt="404" /></figure>
                    </div>
                {/* 13 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/02.jpg" alt="404" /></figure>
                    </div>
                {/* 14 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/IMG_9733.JPG" alt="404" /></figure>
                    </div>
                {/* 15 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="rounded-lg"><img src="/public/IMG_9709.JPG" alt="404" /></figure>
                    </div>

            </div>
        </div>
    );
};

export default PhotoGalary;